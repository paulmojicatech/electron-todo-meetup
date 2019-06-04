import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { IToDoItem } from './models/toDoItem';

@Component({
  selector: 'pmt-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent implements OnInit {

  constructor(private _dialogRef:MatDialogRef<AddItemModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data:IToDoItem) { }

  ngOnInit() {        
  } 
  cancelClick() {
    this._dialogRef.close();
  }
}
