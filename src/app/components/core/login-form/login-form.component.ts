import { Component } from '@angular/core';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-login-form',
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  constructor(public global: GlobalService){}
}
