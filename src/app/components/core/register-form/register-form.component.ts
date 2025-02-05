import { Component, EventEmitter, Output } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { MatButton } from '@angular/material/button';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule, MatButton],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  public form: FormGroup;
  
  constructor(private authService: AuthService, private fb: FormBuilder, public global: GlobalService){
    this.form = fb.group({
        username: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        email: ['', [Validators.required]],
        name: ['', [Validators.required]],
        position: ['', [Validators.required]]
      })
  }
  
  public async submit(){
      if(this.form.valid){
        await this.authService.register({
          username: this.form.value['username'], 
          password: this.form.value['password'],
          email: this.form.value['email'],
          employee: {name: this.form.value['name'], position: this.form.value['position']}
        }).showLoading();
        this.global.showRegister.set(false);
        document.location.reload();
      }else{
        Toast.show({
          text: 'Дані введено неправильно',
          duration: 'long'
        })
      }
  }
}
