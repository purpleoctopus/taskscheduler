import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { UserDTO } from '../../../models/user.model';
import { first, firstValueFrom } from 'rxjs';
import { ConfirmDialogComponent } from '../../core/confirm-dialog/confirm-dialog.component';
import { LoginFormComponent } from '../../core/login-form/login-form.component';
import { RegisterFormComponent } from '../../core/register-form/register-form.component';
import { RouterModule } from '@angular/router';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-settings',
  imports: [MatButton, RouterModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit{
  public user?: UserDTO | null = null

  constructor(private userService: UserService, private notification: NotificationService,
     private auth: AuthService, private view: ViewContainerRef) { }

  ngOnInit(): void {
    this.loadUser()
  }

  public get hasNotification(){
    return this.notification.hasNotification.getValue()
  }

  private async loadUser(){
    this.user = await this.userService.getCurrentUser().showLoading()
  }

  public logout(){
    this.auth.clearToken();
    this.user = undefined;
  }

  public async login(){
    const form = this.view.createComponent(LoginFormComponent)
    await firstValueFrom(form.instance.result$)
    form.destroy()
    await this.loadUser().showLoading();
  }

  public async register(){
    const form = this.view.createComponent(RegisterFormComponent);
    await firstValueFrom(form.instance.result$);
    form.destroy()
    await this.loadUser().showLoading();
  }

  public async delete(){
    const dialog = this.view.createComponent(ConfirmDialogComponent)
    const result = await firstValueFrom(dialog.instance.result$)
    if(result) await this.userService.delete().showLoading()
    this.user = undefined;
    dialog.destroy()
  }
}