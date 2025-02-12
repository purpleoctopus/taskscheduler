import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class InviteService {
  constructor(private http: HttpService) { }

  public async getInvites(): Promise<any[]>{
    const res = await this.http.get('/invites/byToken');
    if(res.status == 200) return res.data
    else return []
  }

  public async sendInvite(userId: string, projectId:string) : Promise<boolean>{
    const res = await this.http.post('/invites/byId',{userId,projectId});
    if(res.status === 200) return true;
    else return false;
  }

  public async acceptInvite(id:string){
    await this.http.put(`/invites/accept`, {id})
  }

  public async rejectInvite(id:string){
    await this.http.put(`/invites/reject`, {id})
  }
}
