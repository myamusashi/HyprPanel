import { bind, GLib, Variable } from 'astal';
import { Gtk } from 'astal/gtk3';

const timeFormat = '%I:%M:%S %p';
const dateFormat = '%A, %B %d';

const date = Variable(GLib.DateTime.new_now_local()).poll(
    1000,
    (): GLib.DateTime => GLib.DateTime.new_now_local(),
);

// const currentTime = Variable.derive([date], (c) => c.format(timeFormat));
// const currentDate = Variable.derive([date], (c) => c.format(dateFormat));

const currentTime = Variable.derive([bind(date)], (c) => c.format(timeFormat))
const currentDate = Variable.derive([bind(date)], (c) => c.format(dateFormat))

export const sessionTime = (): JSX.Element => {
    return (
        <box
            className={'sessionClock'}
            expand
            valign={Gtk.Align.CENTER}
            children={[currentDate, currentTime]}
        />
    );
};
