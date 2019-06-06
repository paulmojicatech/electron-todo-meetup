import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as appState from './state/app.reducer';
import * as fromApp from './state/index';
import * as appActions from './state/app.actions';
import { Observable, of } from 'rxjs';
import { IToDoItem } from './models/toDoItem';
import { MatDialog } from '@angular/material';
import { AddItemModalComponent } from './add-item-modal.component';
import { IpcRenderer, IpcMessageEvent } from 'electron';
import { IpcRendererService } from './services/ipc-renderer.service';

@Component({
  selector: 'pmt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _store: Store<appState.State>,
    private _dialog: MatDialog,
    private _ipcSvc:IpcRendererService,
    private _appRef:ApplicationRef) { 
    }


  ToDos$:Observable<IToDoItem[]>;
  _ipc:IpcRenderer | undefined;

  ngOnInit() {
    this.ToDos$ = this._store.pipe(
      select(fromApp.getToDoItems)
    );
      
    this._ipcSvc.on('LoadList', ((event:IpcMessageEvent, messages:any) => {
      const items:IToDoItem[] = JSON.parse(messages);
      this._store.dispatch(new appActions.LoadFile(items));
      this._ipcSvc.send('ListLoaded');
      this._appRef.tick();
    }));

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
        this._store.dispatch(new appActions.AddItem(result));
      }
    })
  }

}
