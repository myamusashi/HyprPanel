import { sessionButton } from './session/index';
import { loginButton } from './login/index';

export const sessionSelector = (): JSX.Element => {
    return (
        <box
            className={'sessionContainer'}
        >
            [{sessionButton()}, {loginButton()} ]
        </box>
    );
};
