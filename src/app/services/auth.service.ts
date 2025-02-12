import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { environment } from '../../environments/environment.development';
import { LoginDto } from '../models/login.dto';
import { RegisterDTO } from '../models/register.dto';
import { Preferences } from '@capacitor/preferences';
import { Toast } from '@capacitor/toast';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token?: string;

  constructor (){
    this.getToken()
  }

  public async getToken(){
    this.token = (await Preferences.get({key: 'authToken'})).value ?? undefined;
  }

  public async writeToken(){
    await Preferences.set({key: 'authToken', value: this.token ?? ''})
  }

  public async clearToken(){
    this.token = undefined
    await Preferences.remove({key: 'authToken'})
  }

  public async login(user: LoginDto):Promise<boolean>{
    const response = (await CapacitorHttp.post({
      url: `${environment.baseUrl}/auth/login`,
      headers: {
        'Content-Type':'application/json'
      },
      data: user
    }))

    if(response.data.error){
      Toast.show({text: response.data.error, duration:'long'});
      console.log(response.data.error)
    }

    this.token = response.data.token;
    await this.writeToken()
    if(response.status === 200) return true;
    else return false
  }
  public async register(user: RegisterDTO){
    const res = await CapacitorHttp.post({
      url: `${environment.baseUrl}/auth/register`,
      headers: {
        'Content-Type':'application/json'
      },
      data: user
    })
    if(res.status === 200){
      await this.login(user)
    }
  }
}
