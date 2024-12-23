import options from 'src/options';
import { OSDLabel } from './label/index';
import { OSDBar } from './bar/index';
import { OSDIcon } from './icon/index';
import { revealerSetup } from './helpers';
import { Gtk } from 'astal/gtk3';
import { bind } from 'astal';
import { OSDOrientation } from 'src/lib/types/options';

const { orientation } = options.theme.osd;

const VerticalOsd = ({ currentOrientation }: OsdProps): JSX.Element => (
    <box vertical>
        <OSDLabel />
        <OSDBar orientation={currentOrientation} />
        <OSDIcon />
    </box>
);

const HorizontalOsd = ({ currentOrientation }: OsdProps): JSX.Element => (
    <box>
        <OSDIcon />
        <OSDBar orientation={currentOrientation} />
        <OSDLabel />
    </box>
);

export const OsdRevealer = (): JSX.Element => {
    const osdOrientation = bind(orientation).as((currentOrientation) => currentOrientation === 'vertical');

    return (
        <revealer transitionType={Gtk.RevealerTransitionType.CROSSFADE} revealChild={false} setup={revealerSetup}>
            <box className={'osd-container'} vertical={osdOrientation}>
                {bind(orientation).as((currentOrientation) => {
                    if (currentOrientation === 'vertical') {
<<<<<<< HEAD
                        return (
                            <box vertical>
                                <OSDLabel />
                                <OSDBar orientation={currentOrientation} />
                                <OSDIcon />
                            </box>
                        );
=======
                        return <VerticalOsd currentOrientation={currentOrientation} />;
>>>>>>> 97e852cf94090d8d64a92d59068c1792628f809c
                    }

                    return <HorizontalOsd currentOrientation={currentOrientation} />;
                })}
            </box>
        </revealer>
    );
};

interface OsdProps {
    currentOrientation: OSDOrientation;
}
