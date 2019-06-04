import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromApp from './state/app.reducer';
import { Observable } from 'rxjs';
import { IToDoItem } from './models/toDoItem';
import { MatDialog } from '@angular/material';
import { AddItemModalComponent } from './add-item-modal.component';

@Component({
  selector: 'pmt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _store: Store<fromApp.State>,
    private _dialog: MatDialog) { }


  ToDos: IToDoItem[] = [];

  ngOnInit() {
    
  }

  addItem() {
    const diagRef = this._dialog.open(AddItemModalComponent, {
      data: {
        Name: '',
        ToDoDate: new Date(),
        IsComplete: false
      }
    });
    diagRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('RES', result);
        this.ToDos.push(result);
      }
    })
  }

}
