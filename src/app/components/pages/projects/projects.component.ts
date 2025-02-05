import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/project.model';
import { MatButton} from '@angular/material/button'
import { ProjectCardComponent } from "../../core/project-card/project-card.component";
import { AddProjectFormComponent } from "../../core/add-project-form/add-project-form.component";
import { GlobalService } from '../../../services/global.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-projects',
  imports: [MatButton, ProjectCardComponent, AddProjectFormComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  public projects?: Project[];

  constructor(public auth: AuthService, private projectService: ProjectService, public global: GlobalService){}

  ngOnInit() {
    this.loadProjects()
  }

  public async loadProjects(){
    this.projects = await this.projectService.getAll()
  }
}
