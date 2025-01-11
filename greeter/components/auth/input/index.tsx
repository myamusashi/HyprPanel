import { Astal, Gtk } from 'astal/gtk3';
import loginSession from 'services/loginSession';

export const passwordInput = (): JSX.Element => {
    return (
        <window keymode={Astal.Keymode.ON_DEMAND}>
            <entry 
                className={'login-password'}
                hexpand={false}
                halign={Gtk.Align.CENTER}
                valign={Gtk.Align.CENTER}
                placeholderText={'password'}
                visibility={false}
                onChanged={(self) => {
                    loginSession.password.set(self.text || '');
                }}
                onActivate={() => {
                    loginSession.login().catch((err) => console.error(err));
                }}
                setup={(self) => {
                    self.grab_focus();
                }}
            />
        </window>
    );
};
