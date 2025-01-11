import { bind } from 'astal';
import { Gtk } from 'astal/gtk3';
import  Menu  from '../../../../../src/components/shared/Menu'
import  MenuItem  from '../../../../../src/components/shared/MenuItem'
import loginSession from 'services/loginSession';

export const sessionButton = (): JSX.Element => {
    const sessionMenu =
        <Menu
            halign={Gtk.Align.CENTER}
            valign={Gtk.Align.CENTER}
            className={'sessionMenu'}
        >
            {loginSession.getSessions().map((sesh) => {
                return (
                    <MenuItem
                        className={'sessionMenuItem'}
                        label={sesh[0]}
                        onActivate={() => {
                            loginSession.currentSession.set(sesh);
                        }}
                    />
                );
            })};

        </Menu>

    return (
        <button
            className={'sessionButton'}
            hexpand={true}
            vexpand={true}
            onClick={() => {
                sessionMenu.show();
            }}
        >
            <box
                halign={Gtk.Align.FILL}
                hexpand={true}
                vexpand={true}
            >
                <label
                    className={'sessionButtonLabel'}
                    label={bind(loginSession.currentSession.bind('value')).as((sesh) => sesh[0] || 'Unknown')}
                    halign={Gtk.Align.START}
                    hexpand={true}
                />
                <label
                    className={'sessionButtonIcon'}
                    label={''}
                    halign={Gtk.Align.END}
                />
            </box>
        </button>
    );
};
