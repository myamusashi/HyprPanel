import { bind, exec, Variable } from 'astal';
import { Gtk } from 'astal/gtk3';
import AstalBluetooth from 'gi://AstalBluetooth?version=0.1';

export const DeviceStatus = ({ device }: DeviceStatusProps): JSX.Element => {
    const btBatteryBinding = exec(['bash', '-c', `bluetoothctl info | grep -v ${device.address} | grep 'Batt' | awk '{print $4}' | head -1 | tr -d '()' | awk '{print $1"%"}'`]);

    const revealerBinding = Variable.derive(
        [bind(device, 'connected'), bind(device, 'paired')],
        (connected, paired) => {
            return connected || paired;
        },
    );

    return (
        <revealer
            halign={Gtk.Align.START}
            revealChild={revealerBinding()}
            onDestroy={() => {
                revealerBinding.drop();
            }}
        >
            <label
                halign={Gtk.Align.START}
                className={'connection-status dim'}
                label={bind(device, 'connected').as((connected) => (connected ? `Connected ${btBatteryBinding}` : 'Paired'))}
            />
        </revealer>
    );
};

interface DeviceStatusProps {
    device: AstalBluetooth.Device;
}
