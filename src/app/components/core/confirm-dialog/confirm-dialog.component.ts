import { Component } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { DialogService } from '../../../services/dialog.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-confirm-dialog',
  imports: [MatButton],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css'
})
export class ConfirmDialogComponent {
  constructor(public dialog: DialogService){}

  public yes(){
    this.dialog.result(true)
  }
  public no(){
    this.dialog.result(false)
  }
}
