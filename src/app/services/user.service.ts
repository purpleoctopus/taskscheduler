import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { UserDTO } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpService) { }

  public async getForProject(id: string){
    const res = await this.http.get(`/users/forProject/${id}`);
    if(res.status === 200) return res.data
    return []
  }

  public async getAll():Promise<any[]>{
    const res = await this.http.get('/users');
    if(res.status === 200) return res.data
    return []
  }

  public async getCurrentUser() : Promise<UserDTO | undefined>{
    const res = await this.http.get('/users/byToken');
    if(res.status === 200) return res.data
    return
  }

  public async delete(){
    await this.http.delete('/users/byToken');
  }
}
