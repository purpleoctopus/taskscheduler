import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { GlobalService } from '../../../services/global.service';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user-service';
import { UserDTO } from '../../../models/user.model';
import { DialogService } from '../../../services/dialog.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-settings',
  imports: [MatButton,],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit{
  public user?: UserDTO

  constructor(public global: GlobalService, private userService: UserService,
     private auth: AuthService, private dialog: DialogService) { }

  async ngOnInit(): Promise<void> {
    this.user = await this.userService.getCurrentUser().showLoading()
  }

  public logout(){
    this.auth.clearToken();
    window.location.reload();
  }
  public async delete(){
    this.dialog.show.set(true)
    const result = await firstValueFrom(this.dialog.dialogData$)
    if(result) await this.userService.delete()
    document.location.reload();
  }
}