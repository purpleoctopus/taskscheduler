import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, catchError, filter, from, interval, of, Subject, switchMap, takeWhile } from 'rxjs';
import { AuthService } from './auth.service';
import { Toast } from '@capacitor/toast';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public isPolling: boolean = true;
  public hasNotification: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpService, private auth: AuthService) { }

  public async startPolling(){
    interval(10000).pipe(
        takeWhile(() => this.isPolling),
        filter(() => !!this.auth.token),
        switchMap(() => 
          from(this.http.get('/notifications')).pipe(
            catchError(() => of({ data: { message: 'ERROR' } }))
          )
        )
      ).subscribe((res)=>{
        if(res.data?.message === true && !this.hasNotification.getValue()){
          this.hasNotification.next(true);
          console.log('Нове сповіщення!');
          Toast.show({text: 'Нове сповіщення!', duration: 'short'})
        }
      })
  }
}