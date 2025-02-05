import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  public show = signal(false)
  private dialogData = new Subject<boolean>()
  public dialogData$ = this.dialogData.asObservable()
  
  constructor() { }

  public result(value:boolean){
    this.dialogData.next(value)
    this.show.set(false)
  }
}