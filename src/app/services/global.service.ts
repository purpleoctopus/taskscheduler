import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public showAddProject = signal(false)
  public showLogin = signal(false)
  public showRegister = signal(false)

  constructor() { }
}
