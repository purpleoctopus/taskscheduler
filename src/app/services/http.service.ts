import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment.development';
import { Toast } from '@capacitor/toast';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private auth: AuthService, private router: Router) { }

  async request(method: 'GET' | 'POST' | 'PUT' | 'DELETE', endpoint: string, body?: any, noToken?: boolean) {
    if(!this.auth.token && !noToken) {this.router.navigate(['/settings']);return {} as HttpResponse;}
    try {
      const response = await CapacitorHttp.request({
        method,
        url: `${environment.baseUrl}${endpoint}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.auth.token ? `Bearer ${this.auth.token}` : '',
        },
        data: body,
      });
      if (response.status === 403) {
        await this.auth.clearToken();
        if(endpoint != '/notifications/long-polling'){
          this.router.navigate(['/settings']);
        }
      }
      if(response.data && response.data.error){
        Toast.show({text: response.data.error, duration:'long'});
        console.log(response.data.error)
      }

      return response;
    } catch (error) {
      throw error
    }
  }

  async get(endpoint: string) {
    return this.request('GET', endpoint);
  }

  async post(endpoint: string, body: any) {
    return this.request('POST', endpoint, body);
  }

  async put(endpoint: string, body?: any) {
    return this.request('PUT', endpoint, body);
  }

  async delete(endpoint: string) {
    return this.request('DELETE', endpoint);
  }
}
