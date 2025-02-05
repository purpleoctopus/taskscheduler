import { inject, Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

declare global{
  interface Promise<T> {
    showLoading(): Promise<T>;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public showAddProject = signal(false)
  public showLogin = signal(false)
  public showRegister = signal(false)
  public showLoading = signal(false)
  
  constructor() {
    const service = this;
    Promise.prototype.showLoading = function <T>(this: Promise<T>): Promise<T> {
      service.showLoading.set(true);
      return this.finally(() => service.showLoading.set(false));
    };
   }
}