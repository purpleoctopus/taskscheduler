import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/core/footer/footer.component";
import { GlobalService } from './services/global.service';
import { LoginFormComponent } from './components/core/login-form/login-form.component';
import { RegisterFormComponent } from './components/core/register-form/register-form.component';
import { AuthService } from './services/auth.service';
import { LoadingComponent } from './components/core/loading/loading.component';
import { ConfirmDialogComponent } from './components/core/confirm-dialog/confirm-dialog.component';
import { DialogService } from './services/dialog.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, LoginFormComponent, 
    RegisterFormComponent, LoadingComponent, ConfirmDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = '';

  constructor(private auth: AuthService, public global: GlobalService, public dialog: DialogService) {}
}
