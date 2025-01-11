import { GLib } from 'astal';
import { ensureDirectory } from '/home/gilang/Documents/Project/CONTRIBUTE/HyprPanel/src/lib/session';

import AccountsService from "gi://AccountsService?version=1.0"
import Greet from 'gi://AstalGreet?version=0.1';
const { userName } = AccountsService.UserManager.get_default().list_users()[0]

declare global {
    const WALLPAPER: string;
};

Object.assign(globalThis, {
    TMP: `${GLib.get_tmp_dir()}/greeter`,
    OPTIONS: '/var/cache/greeter/options.json',
    WALLPAPER: '/home/gilang/Pictures/wallpapers/dmc.png',
    USER: userName,
});

ensureDirectory(TMP);
