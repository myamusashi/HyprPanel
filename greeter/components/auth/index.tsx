import { Gtk } from 'astal/gtk3';
import { passwordInput } from './input/index';
import { profileName } from './profile/name';
import { profilePicture } from './profile/picture';
import { sessionSelector } from './sessions/index';

export const auth = (): JSX.Element => {
    return (
        <window
            className={'auth'}
            halign={Gtk.Align.CENTER}
            valign={Gtk.Align.CENTER}
        >
            <box vertical hexpand={true} vexpand={true}>
                [${profilePicture()},${profileName()}, ${passwordInput()}, ${sessionSelector()}]
            </box>
        </window>
    );
};
