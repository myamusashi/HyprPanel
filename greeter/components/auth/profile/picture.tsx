import { Gtk } from 'astal/gtk3';
import loginSession from 'services/loginSession';

export const profilePicture = (): JSX.Element => {
    return (
        <box
            hexpand={false}
            vexpand={false}
            halign={Gtk.Align.CENTER}
            valign={Gtk.Align.CENTER}
        >
            <box
                className={'profilePicture'}
                css={`background-image: url("${loginSession.profilePic.get()}")`}
            />
        </box>
    );
};
