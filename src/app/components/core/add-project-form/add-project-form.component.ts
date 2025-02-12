import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { ProjectService } from '../../../services/project.service';
import { ColorTheme } from '../../../models/project.model';
import { Toast } from '@capacitor/toast';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-project-form',
  imports: [FormsModule, MatButton],
  templateUrl: './add-project-form.component.html',
  styleUrl: './add-project-form.component.css'
})
export class AddProjectFormComponent {
  private result = new Subject<Promise<unknown> | void>();
  public result$ = this.result.asObservable();
  public name: string = '';
  public color: ColorTheme = ColorTheme.Purple;
  ColorTheme = ColorTheme;

  constructor(private projectService: ProjectService) {}

  public async createProject(){
    if(this.name.length < 2) {Toast.show({text: 'Назва введена некоректно', duration: 'long'}); return;}
    const res = await this.projectService.add({name: this.name, colortheme: this.color})
    if(res.status == 200)
      this.result.next()
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

  public close(){
    this.result.next()
  }
}