import { Component } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { ProjectService } from '../../../services/project.service';
import { ColorTheme } from '../../../models/project.model';

@Component({
  selector: 'app-add-project-form',
  imports: [FormsModule, MatButton],
  templateUrl: './add-project-form.component.html',
  styleUrl: './add-project-form.component.css'
})
export class AddProjectFormComponent {
  public name: string = '';
  public color: ColorTheme = ColorTheme.Purple;
  ColorTheme = ColorTheme;

  constructor(public global: GlobalService, private projectService: ProjectService) {}

  public async createProject(){
    await this.projectService.add({name: this.name, 
      ownerId: '2deb7cb0-55d0-423e-b193-a45d1546d708', colortheme: this.color});
    this.global.showAddProject.set(false);
  }

  public selectColor(color: ColorTheme){
    this.color = color;
    for(let elem of document.getElementsByClassName('form-color-select-btn')){
      if(elem.classList.contains('purple') && color === ColorTheme.Purple){
        elem.classList.add('selected')
      }else if(elem.classList.contains('cyan') && color === ColorTheme.Cyan){
        elem.classList.add('selected')
      }else if(elem.classList.contains('orange') && color === ColorTheme.Orange){
        elem.classList.add('selected')
      }else{
        elem.classList.remove('selected')
      }
    }
  }
}
