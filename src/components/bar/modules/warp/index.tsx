import options from "src/options";
import { Module } from "../../shared/Module";
import { inputHandler, throttleInput } from "../../utils/helpers";
import { BarBoxChild } from "src/lib/types/bar";
import { checkWarpService, isWarpConnect, toggleWarp } from "./helpers";
import { bind, Variable } from "astal";
import { Astal } from "astal/gtk3";

const {
    label,
    icon,
    onLabel,
    offLabel,
    rightClick,
    middleClick,
    scrollUp,
    scrollDown,
} = options.bar.customModules.warp;

const thorttledToggleWarp = throttleInput(() => toggleWarp(isWarpConnect), 1000);

checkWarpService();

export const Warp = (): BarBoxChild => {
    const iconBinding = Variable.derive([bind(isWarpConnect), bind(icon)], (active, icn) => {
        return active ? icn : '󰇖';
    })

    const tooltipBinding = Variable.derive([isWarpConnect], (active) => {
        return active ? 'Connect' : "Disconnect";
    });

    const labelBinding = Variable.derive([bind(isWarpConnect), bind(onLabel), bind(offLabel)], (active, onLbl, offLbl) => {
        return active ? onLbl : offLbl;
    });

    const warpModule = Module({
        textIcon: iconBinding(),
        tooltipText: tooltipBinding(),
        boxClass: 'warp',
        label: labelBinding(),
        showLabelBinding: bind(label),
        props: {
            setup: (self: Astal.Button) => {
                inputHandler(self, {
                    onPrimaryClick: {
                        fn: () => {
                            thorttledToggleWarp();
                        },
                    },
                    onSecondaryClick: {
                        cmd: rightClick,
                    },
                    onMiddleClick: {
                        cmd: middleClick,
                    },
                    onScrollUp: {
                        cmd: scrollUp,
                    },
                    onScrollDown: {
                        cmd: scrollDown,
                    },
                });
            },
            onDestroy: () => {
                tooltipBinding.drop();
                labelBinding.drop();
            },
        },
    });

    return warpModule;
};
