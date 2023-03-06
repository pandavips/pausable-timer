interface IOptions {
    timer: number;
    mode: "loop" | "once";
    callback: () => any;
    debug?: boolean;
}
type ModeType = "loop" | "once";
declare class PausableTimer {
    private id;
    private timer;
    private startTime;
    private diffTime;
    private isDubgger;
    private callback;
    private mode;
    constructor(option: IOptions);
    start: () => void;
    resume: () => void;
    pause: () => void;
    after(delay: number): void;
    stop: () => void;
    getNowTime: () => number;
    setMode: (mode: ModeType, isReset?: false) => void;
    reset: () => void;
    getState: () => {
        diffTime: number;
        startTime: number;
        timer: number;
        mode: ModeType;
    };
    checkMode: (mode: ModeType) => void;
}

export { PausableTimer as default };
