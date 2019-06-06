import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class IpcRendererService {
  _ipc:IpcRenderer | undefined = void 0;

  constructor() {
      if (window.require) {
        try {
          this._ipc = window.require('electron').ipcRenderer;
        } catch (e) {
          throw e;
        }
      } else {
        console.warn('Electron\'s IPC was not loaded');
      }
   }

   on(channel:string, listener:any) {
     this._ipc.on(channel, listener);
   }

   send(channel:string, args:any = null) {
    this._ipc.send(channel, args);
   }
}
