import loginSession from "services/loginSession";

export const loginButton = (): JSX.Element => {
    return (
        <button
            className={'loginButton'}
            hexpand={false}
            vexpand={false}
            label={'>>'}
            onClick={() => {
                loginSession.login()
            }}
        />
    );
};
