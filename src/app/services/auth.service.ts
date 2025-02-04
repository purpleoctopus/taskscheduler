import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { environment } from '../../environments/environment.development';
import { CreateEmployeeDTO } from '../models/create-employee.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token?: string 

  public async login(username:string, password:string){
    this.token = (await CapacitorHttp.post({
      url: `${environment.baseUrl}/auth/login`,
      headers: {
        'Content-Type':'application/json'
      },
      data: {username,password}
    })).data
  }
  public async register(username: string, password: string, email: string, employee: CreateEmployeeDTO){
    const res = await CapacitorHttp.post({
      url: `${environment.baseUrl}/auth/register`,
      headers: {
        'Content-Type':'application/json'
      },
      data: {username,password, email, employee}
    });
    if(res.status === 200){
      this.login(username, password)
    }
  }
}
