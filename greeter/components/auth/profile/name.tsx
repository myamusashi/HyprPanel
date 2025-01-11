import { bind, Variable } from 'astal';
import { Gtk } from 'astal/gtk3';
import loginSession from 'services/loginSession';

const hoveringName = Variable(false);

export const profileName = (): JSX.Element => {
    return (
        <eventbox
            hexpand={true}
            vexpand={true}
            onHover={() => {
                hoveringName.set(true)
            }}
            onHoverLost={() => {
                hoveringName.set(false)
            }}
        >
            <box className={'profileNameContainer'}>
                <button
                    className={'left navigator'}
                    hexpand={true}
                    vexpand={true}
                    halign={Gtk.Align.START}
                    valign={Gtk.Align.CENTER}
                    label={bind(hoveringName.call('value')).as((hoverVal) => (hoverVal ? '<' : ''))}
                />
                <label
                    className={'profileName'}
                    hexpand={false}
                    vexpand={false}
                    halign={Gtk.Align.CENTER}
                    valign={Gtk.Align.CENTER}
                    label={loginSession.userName.get()}
                /> 
                <button 
                    className={'right navigator'}
                    hexpand={true}
                    vexpand={true}
                    halign={Gtk.Align.END}
                    valign={Gtk.Align.CENTER}
                    label={bind(hoveringName.call('value')).as((hovering) => (hovering ? '>' : ''))}
                />
            </box>
        </eventbox>
    );
};
