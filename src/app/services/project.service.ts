import { Injectable } from '@angular/core';
import { CreateProjectDTO } from '../models/create-project.dto';
import { Toast } from '@capacitor/toast';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http:HttpService, private auth: AuthService) { }

  async getAll(){
    try{
      const res = (await this.http.get(`/projects`).showLoading()).data
      return res
    }catch(error){
      Toast.show({
        text: "Упс! Здається, проблеми зі з'єднанням",
        duration: 'long'
      })
      return
    }
  }

  async add(value: CreateProjectDTO){
    const res = await this.http.post('/projects', value).showLoading()
    return res
  }
}
