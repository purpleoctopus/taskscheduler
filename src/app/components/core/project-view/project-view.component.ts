import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Project } from '../../../models/project.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../../services/project.service';
import { ProjectEmployeesComponent } from "../project-employees/project-employees.component";
import { MatButton } from '@angular/material/button';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-project-view',
  imports: [ProjectEmployeesComponent, MatButton],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.css'
})
export class ProjectViewComponent implements OnInit {
  public project?: Project;
  public isOwner: boolean = false;

  constructor(private route: ActivatedRoute, private service: ProjectService, 
    private router: Router, private view: ViewContainerRef){}

  ngOnInit() {
    const snapshot = this.route.snapshot;
    if(snapshot.params['id'])
      this.loadProject(snapshot.params['id'])
  }

  private async loadProject(id: string){
    const [project, isOwner] = (await this.service.getById(id).showLoading())
    this.project = project
    this.isOwner = isOwner
  }

  public inviteEmployee(){
    if(this.project)
    this.router.navigate([`/invite/${this.project?.id}`])
  }

  public async deleteProject(){
    const form = this.view.createComponent(ConfirmDialogComponent);
    const result = await firstValueFrom(form.instance.result$)
    form.destroy()
    if(!result || !this.project) return;
    await this.service.deleteById(this.project.id).showLoading()
    this.router.navigate(['/projects'])
  }

  public async leaveProject(){
    const form = this.view.createComponent(ConfirmDialogComponent);
    const result = await firstValueFrom(form.instance.result$)
    form.destroy()
    if(!result || !this.project) return;
    await this.service.leaveById(this.project.id).showLoading()
    this.router.navigate(['/projects'])
  }
}
