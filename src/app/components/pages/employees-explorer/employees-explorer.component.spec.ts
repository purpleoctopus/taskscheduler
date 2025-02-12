import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesExplorerComponent } from './employees-explorer.component';

describe('EmployeesExplorerComponent', () => {
  let component: EmployeesExplorerComponent;
  let fixture: ComponentFixture<EmployeesExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesExplorerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
