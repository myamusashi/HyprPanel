import { execAsync, Variable } from "astal";

export const isWarpActiveCommand = `bash -c "pgrep -x 'warp-svc' > /dev/null && echo 'yes' || echo 'no'"`
export const isWarpConnectCommand = `bash -c "warp-cli status | awk {'print $3'}"`
export const isWarpDisconnectCommand = `bash -c "warp-cli status | head -1 | awk {'print $3'}"`

export const isWarpConnect = Variable(false);
export const isWarpActive = Variable(false);

export const checkWarpService = (): undefined => {
    execAsync(isWarpActiveCommand).then((res) => {
        if (res === 'no') {
            execAsync(`bash -c "notify-send -a 'hyprpanel' 'Warp is not active' 'Please check your warp-svc is it running or not!'"`).then(() => {
                isWarpActive.set(res === 'no');
            });
        } else {
            isWarpActive.set(res === 'yes');
        }
    });
}

export const toggleWarp = (isWarpConnect: Variable<boolean>): void => {
    if (isWarpActive.get()) {
        if (isWarpConnect.get()) {
            execAsync(`bash -c "warp-cli disconnect"`).then(() => {
                execAsync(isWarpConnectCommand).then((res) => {
                    isWarpConnect.set(res === 'Disconnected');
                });
            });
        } else {
            execAsync(`bash -c "warp-cli connect"`).then(() => {
                execAsync(isWarpDisconnectCommand).then((res) => {
                    isWarpConnect.set(res === 'Connected')
                });
            });
        }
    } else {
        checkWarpService();
    }
}
