export type Params = {
    defaultClass: string,
    onWorkClass: string,
    onBreakClass: string,
    isBreak: boolean,
    isStart: boolean
}

export function getTimerClassName(params: Params) {
    let timerClass = params.defaultClass

    if (params.isStart) {
        timerClass = params.defaultClass + " " + params.onWorkClass
    }

    if (params.isBreak) {
        timerClass = params.defaultClass + " " + params.onBreakClass
    }

    return timerClass
}