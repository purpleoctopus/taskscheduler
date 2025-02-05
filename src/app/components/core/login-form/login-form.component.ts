import { Component } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { MatButton } from '@angular/material/button';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, MatButton],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  public form: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, public global: GlobalService){
    this.form = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  public async submit(){
    if(this.form.valid){
      const success = await this.authService.login({username: this.form.value['username'], password: this.form.value['password']}).showLoading();
      if(success){
        this.global.showLogin.set(false);
        document.location.reload();
      }else{
        Toast.show({
          text: 'Спроба логіна невдала'
        })
        this.form.patchValue({'password':''})
      }
    }
  }
}
