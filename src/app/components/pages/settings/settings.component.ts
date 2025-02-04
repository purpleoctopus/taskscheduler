import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { GlobalService } from '../../../services/global.service';
import { LoginFormComponent } from '../../core/login-form/login-form.component';
import { RegisterFormComponent } from '../../core/register-form/register-form.component';

@Component({
  selector: 'app-settings',
  imports: [MatButton, LoginFormComponent, RegisterFormComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  constructor(public global: GlobalService) { }
}
