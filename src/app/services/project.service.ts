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
      const res = (await this.http.get(`/projects`)).data
      return res
    }catch(error){
      Toast.show({
        text: "Упс! Здається, проблеми зі з'єднанням",
        duration: 'long'
      })
      return
    }
  }

  async getById(id: string){
   const res = (await this.http.get(`/projects/${id}`)).data
   return [res.project, res.isOwner]
  }

  async deleteById(id: string){
    await this.http.delete(`/projects/${id}`)
  }

  async add(value: CreateProjectDTO){
    const res = await this.http.post('/projects', value)
    return res
  }

  async leaveById(id: string){
    await this.http.put(`/projects/leave/${id}`)
  }
}
