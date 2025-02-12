import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-dialog',
  imports: [MatButton],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css'
})
export class ConfirmDialogComponent {
  private result = new Subject<boolean>()
  public result$ = this.result.asObservable()

  constructor(){}

  public yes(){
    this.result.next(true)
  }
  public no(){
    this.result.next(false)
  }
}
