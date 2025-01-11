import { monitorFile } from 'astal';
import { App } from 'astal/gtk3';
import { bash, dependencies } from '../../src/lib/utils';

export const resetCss = async (): Promise<void> => {
    if (!dependencies('sass')) return;

    try {
        const css = `/home/gilang/main.css`;
        const localScss = `/home/gilang/Documents/Project/CONTRIBUTE/HyprPanel/greeter/scss/main.scss`;

        await bash(`sass --load-path=/home/gilang/Documents/Project/CONTRIBUTE/HyprPanel/greeter/scss/ ${localScss} ${css}`);

        App.apply_css(css, true);
    } catch (error) {
        console.log("Error: ", error);
    };
};

// monitorFile(`/home/gilang/Documents/Project/CONTRIBUTE/HyprPanel/greeter/scss/`, resetCss);

await resetCss();
