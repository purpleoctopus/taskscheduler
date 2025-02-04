import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TitleService } from '../../../services/title.service';

@Component({
  selector: 'app-main-page',
  imports: [MatSlideToggleModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit{
  constructor(private titleService: TitleService){}

  ngOnInit(): void {
    this.titleService.setTitle('Головна')
  }
}
