import { BrowserWindow, Menu } from "electron";
import { MenuService } from './menu/menu.service';
const ipcMain = require('electron').ipcMain;

export const ListenerService = {
    listen(window: BrowserWindow) {

        ipcMain.on('ListLoaded', () => {
            const menuSvc = new MenuService(window);
            const appMenu = Menu.getApplicationMenu();
            const fileSubMenus = appMenu.items.filter(item => item['submenu']);
            const loadListItem = fileSubMenus[0]['submenu'].items[0];
            if (loadListItem) {
                menuSvc.disableMenuItem(loadListItem);
            }
        });
    }
}