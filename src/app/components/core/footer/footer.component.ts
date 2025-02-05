import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { GlobalService } from '../../../services/global.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private auth: AuthService, private global: GlobalService, private router: Router){ }

  public navigate(route: string){
    if(route === '/projects' && !this.auth.token){
      this.global.showLogin.set(true)
      return
    }
    this.router.navigate([route])
  }
}
