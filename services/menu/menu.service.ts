import { dialog, BrowserWindow, MenuItem, app } from 'electron';
const { ipcMain } = require('electron');
const fs = require('fs');

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
                        this._win.webContents.send('LoadList', loadedList);
                    }
                }
            },
            {
                label: 'Quit',
                accelerator: 'CmdOrCtrl+Q',
                click: () => {
                    app.quit();
                }
            }
        ]
    }

    disableMenuItem(item:MenuItem) {
        item.enabled = false;
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
            if (file.length) {
                await fs.readFile(file[0], (err, data) => {
                    if (err) {
                        resolve(err);
                    }
                    else {
                        resolve(data.toLocaleString());
                    }
                });
            }
        });
    }
}