import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { CreateProjectDTO } from '../models/create-project.dto';
import { Toast } from '@capacitor/toast';
import { CapacitorHttp } from '@capacitor/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private auth: AuthService) { }

  async getAll(){
    try{
      //const res = await firstValueFrom(this.http.get<Project[]>(`${environment.baseUrl}/projects`))
      const res = (await CapacitorHttp.get({
        headers: {
          'Authorization': `Bearer ${this.auth.token}`
        },
        url: `${environment.baseUrl}/projects`
      })).data
      return res
    }catch(error){
      Toast.show({
        text: "Упс! Здається, проблеми зі з'єднанням",
        duration: 'long'
      })
      return []
    }
  }

  async add(value: CreateProjectDTO){
    //return await firstValueFrom(this.http.post<Project>(`${environment.baseUrl}/projects`, value))
    return await CapacitorHttp.post({
      headers: {
        'Content-Type':'application/json',
        'Authorization': `Bearer ${this.auth.token}`
      },
      url: `${environment.baseUrl}/projects`,
      data: value
    })
  }
}
