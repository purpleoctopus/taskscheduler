import { ChangeDetectorRef, Injectable } from '@angular/core';
import {  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private titleSubject = new Subject<string>();
  title$ = this.titleSubject.asObservable();

  constructor() {}

  setTitle(title: string) {
    this.titleSubject.next(title);
  }
}
