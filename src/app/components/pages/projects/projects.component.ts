import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../services/title.service';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/project.model';
import { MatButton} from '@angular/material/button'
import { ProjectCardComponent } from "../../core/project-card/project-card.component";
import { AddProjectFormComponent } from "../../core/add-project-form/add-project-form.component";
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-projects',
  imports: [MatButton, ProjectCardComponent, AddProjectFormComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  public projects: Project[] = []

  constructor(private titleService: TitleService, private projectService: ProjectService, public global: GlobalService){}

  async ngOnInit(): Promise<void> {
    this.titleService.setTitle('Проекти')
    this.projects = await this.projectService.getAll()
  }
}
