import { App } from "astal/gtk3";
import { win } from "./greeter";
import { GLib } from "astal";

App.start({
    instanceName: 'HyprPanel-greet',
    css: './scss/main.css',   
    cursorTheme: GLib.getenv('XCURSOR_THEME')!,
    main() {
        win();
    },
});
