import { Component, OnInit } from '@angular/core';
import { InviteService } from '../../../services/invite.service';
import { MatButton } from '@angular/material/button';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-notification',
  imports: [MatButton],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit {
  public notifications: any[] = []
  constructor(private inviteService: InviteService, private notificationService: NotificationService){}

  ngOnInit(): void {
    this.getNotifications();
    this.notificationService.hasNotification.next(false);
  }

  private async getNotifications(){
    this.notifications = await this.inviteService.getInvites().showLoading()
  }

  public async accept(id:string){
    await this.inviteService.acceptInvite(id).showLoading()
    await this.getNotifications()
  }

  public async reject(id:string){
    await this.inviteService.rejectInvite(id).showLoading()
    await this.getNotifications()
  }
}
