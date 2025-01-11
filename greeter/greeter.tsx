import '/home/gilang/Documents/Project/CONTRIBUTE/HyprPanel/greeter/scss/style';
import '/home/gilang/Documents/Project/CONTRIBUTE/HyprPanel/greeter/session';
import { auth } from '/home/gilang/Documents/Project/CONTRIBUTE/HyprPanel/greeter/components/auth/index';
import { sessionTime } from '/home/gilang/Documents/Project/CONTRIBUTE/HyprPanel/greeter/components/time/index';
import { loginControls } from '/home/gilang/Documents/Project/CONTRIBUTE/HyprPanel/greeter/components/controls/index';
import { Gtk } from 'astal/gtk3';

export const win = (): JSX.Element => {
    return (
        <window
            name={'greeter'}
            className={'greeter-window'}
            css={`background-image: url('/home/gilang/Pictures/wallpapers/dmc.png`}
            setup={(self) => {
                self.set_default_size(1000, 1000);
            }}
        >
            <overlay>
                <box
                    vertical
                    halign={Gtk.Align.FILL}
                    valign={Gtk.Align.FILL}
                    children={[sessionTime(), auth(), loginControls()]}
                />
            </overlay>
        </window>
    );
};
