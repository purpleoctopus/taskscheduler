import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ColorTheme, Project } from '../../../models/project.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [RouterModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent implements AfterViewInit{
  @Input('project') public project!: Project;
  @ViewChild('card', { static: false }) private parent!: ElementRef;

  ngAfterViewInit(): void {
    let color
    switch (this.project.colortheme){
      case ColorTheme.Purple: {color = 'purple';break;}
      case ColorTheme.Orange: {color = 'orange';break;}
      case ColorTheme.Cyan: {color = 'cyan';break;}
      default: {color = 'purple';break;}
    }
    this.parent.nativeElement.style.background = `var(--${color}-card)`
  }
}
