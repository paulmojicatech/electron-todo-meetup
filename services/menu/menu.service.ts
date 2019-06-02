import { dialog, BrowserWindow } from 'electron';
const icpMainService = require('electron').ipcMain;

export class MenuService {
    constructor(private _win: BrowserWindow) { }

    createMenu(): Electron.MenuItemConstructorOptions[] {
        return [
            {
                label: 'File',
                submenu: this.createFileSubMenu()
            }
        ]
    }

    createFileSubMenu(): Electron.MenuItemConstructorOptions[] {
        return [
            {
                label: 'Load List',
                accelerator: 'CmdOrCtrl+L',
                click: async () => {
                    const loadedList = await this.loadList();
                    if (loadedList) {
                        console.log('File selected');
                        icpMainService.emit('LoadList', { 'List': loadedList });
                    }
                }
            }
        ]
    }

    private async loadList(): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            const file = await dialog.showOpenDialog(
                this._win,
                {
                    title: 'Open Json File',
                    filters: [
                        {
                            name: 'json', extensions: ['json']
                        }
                    ]
                }
            );
            resolve(file);
        });
    }
}