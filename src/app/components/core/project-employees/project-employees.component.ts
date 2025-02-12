import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-project-employees',
  imports: [],
  templateUrl: './project-employees.component.html',
  styleUrl: './project-employees.component.css'
})
export class ProjectEmployeesComponent {
  @Input() owner!: Employee;
  @Input() public employees: Employee[] = [];
  @ViewChild('container') container!: ElementRef;
  @ViewChild('head') head!: ElementRef;
  @ViewChild('arrow') arrow!: ElementRef;
  @ViewChild('employeesparent') employeesparent!: ElementRef;

  public toggleEmployees(){
    this.arrow.nativeElement.classList.toggle('active');
    const employees = this.employeesparent.nativeElement as HTMLElement
    employees.classList.toggle('active')
    const height = employees.style.height as string
    if(height.substring(height.length - 2) != 'px'){
      employees.style.height = employees.scrollHeight + 'px'
      setTimeout(()=>{if(employees.classList.contains('active'))employees.style.overflowY = 'auto'}, 300)
    }
    else{
      employees.style.height = ''
      employees.style.overflowY = ''
    }
  }
}