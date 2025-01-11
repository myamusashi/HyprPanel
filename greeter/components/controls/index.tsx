import { GLib, Variable } from 'astal';
import { Gtk } from 'astal/gtk3';

const timeFormat = '%I:%M:%S %p';
const dateFormat = '%a %b %d';

// const date = Variable(GLib.DateTime.new_now_local()).poll(1000, "date")

// const currentTime = Variable.derive([date], (c) => c.format(timeFormat) || '');
// const currentDate = Variable.derive([date], (c) => c.format(dateFormat) || '');

// export const loginControls = (): GtkWidget => {
//     return Widget.Box({
//         className: 'loginControls',
//         expand: true,
//         vpack: 'center',
//         vertical: true,
//         children: [
//             Widget.Label({
//                 label: '',
//             }),
//             Widget.Label({
//                 label: '',
//             }),
//         ],
//     });
// };

export const loginControls = (): JSX.Element => {
    return (
        <box 
            className={'loginControls'}
            hexpand={true}
            vexpand={true}
            valign={Gtk.Align.CENTER}
        >
            <label 
                label={''}
            />
            <label 
                label={''}
            />

        </box>
    );
};
