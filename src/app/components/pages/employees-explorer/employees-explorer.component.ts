import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InviteService } from '../../../services/invite.service';
import { Employee } from '../../../models/employee.model';
import { UserService } from '../../../services/user.service';
import { UserDTO } from '../../../models/user.model';
import { MatButton } from '@angular/material/button';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-employees-explorer',
  imports: [MatButton],
  templateUrl: './employees-explorer.component.html',
  styleUrl: './employees-explorer.component.css'
})
export class EmployeesExplorerComponent implements OnInit {
  public users: UserDTO[] = []
  private projectId: string = ''

  constructor(private route: ActivatedRoute, private inviteService: InviteService, 
    private userService: UserService, private router: Router, private projectService: ProjectService){}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['projectId']
    if(this.projectId)
    this.loadEmployees().showLoading()
  }

  private async loadEmployees(){
    this.users = await this.userService.getForProject(this.projectId);
  }

  public async invite(userId:string){
    if(this.projectId){
      await this.inviteService.sendInvite(userId,this.projectId).showLoading();
      this.loadEmployees().showLoading();
    }
    else this.router.navigate(['/home'])
  }
}
