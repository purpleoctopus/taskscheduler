import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/core/footer/footer.component";
import { LoadingComponent } from './components/core/loading/loading.component';
import { App } from '@capacitor/app';
import { Location } from '@angular/common';
import { AuthService } from './services/auth.service';
import { NotificationService } from './services/notification.service';

declare global{
  interface Promise<T> {
    showLoading(): Promise<T>;
  }
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private view: ViewContainerRef, private location: Location, private auth: AuthService,
    private notification: NotificationService
  ) {
    Promise.prototype.showLoading = function <T>(this: Promise<T>): Promise<T> {
      const component = view.createComponent(LoadingComponent);
      return this.finally(() => component.destroy());
    };
  }

  ngOnInit(): void {
    this.notification.startPolling();
    App.addListener('backButton', ()=>{
      this.location.back()
    })
  }
}
