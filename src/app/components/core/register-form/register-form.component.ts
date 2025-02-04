import { Component } from '@angular/core';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-register-form',
  imports: [],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  constructor(public global: GlobalService){}
}
