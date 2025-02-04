import { AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleService } from './services/title.service';
import { FooterComponent } from "./components/core/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = '';

  constructor(private titleService: TitleService, private cd: ChangeDetectorRef) {
    this.titleService.title$.subscribe(title => {
      this.title = title;
      cd.detectChanges();
    });
  }
}
