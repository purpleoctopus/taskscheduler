import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { MatButton } from '@angular/material/button';
import { Toast } from '@capacitor/toast';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, MatButton],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  private result = new Subject<void | Promise<void>>();
  public result$ = this.result.asObservable()
  public form: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder){
    this.form = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  public async submit(){
    if(this.form.valid){
      const res = await this.authService.login({username: this.form.value['username'],
         password: this.form.value['password']}).showLoading()
      if(res)
        this.result.next();
      else{
        this.form.patchValue({password: ''})
      }
    }
  }

  
  public close(){
    this.result.next()
  }
}
