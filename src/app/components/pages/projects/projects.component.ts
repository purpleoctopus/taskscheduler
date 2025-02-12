import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/project.model';
import { MatButton} from '@angular/material/button'
import { ProjectCardComponent } from "../../core/project-card/project-card.component";
import { AuthService } from '../../../services/auth.service';
import { AddProjectFormComponent } from '../../core/add-project-form/add-project-form.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-projects',
  imports: [MatButton, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  public projects: Project[] = [];

  constructor(public auth: AuthService, private projectService: ProjectService, private view: ViewContainerRef){}

  ngOnInit() {
    this.loadProjects()
  }

  public async addProject(){
    const result = this.view.createComponent(AddProjectFormComponent);
    await firstValueFrom(result.instance.result$);
    result.destroy();
    await this.loadProjects();
  } 

  public async loadProjects(){
    this.projects = await this.projectService.getAll().showLoading();
  }
}
