import React from 'react';
import styles from './timer.module.css';
import {getTimerValue} from "../../../../../utils/getTimerValue";
import {IncreaseTimeIcon} from "../../../../Icons/IncreaseTimeIcon";
import {getTimerClassName, Params} from "../../../../../utils/getTimerHeaderClass";
import {UseTimerParams} from "../../../../../hooks/useTimer";

type Props = {
    timerParams: UseTimerParams,
}

export function Timer({timerParams}: Props) {
    const timerValueParams: Params = {
        isWork: timerParams.isWork,
        isBreak: timerParams.isBreak,
        defaultClass: styles.timerValue,
        onBreakClass: styles.break,
        onWorkClass: styles.work,
        isPause: timerParams.isPause
    }

    const stopButtonParams: Params = {
        isWork: timerParams.isWork,
        isBreak: timerParams.isBreak,
        defaultClass: styles.stopButton,
        onBreakClass: styles.break,
        onWorkClass: styles.stopButtonOnWork,
    }

    return (
        <div className={styles.timer}>
            <div className={getTimerClassName(timerValueParams)}>
                {getTimerValue(timerParams.minutes, timerParams.seconds)}
            </div>
            <div className={styles.timerLabel}>
                <div className={styles.taskNumber}>
                    Задача {timerParams.currentTaskNumber} - <br/>
                </div>
                <div className={styles.taskTitle}>
                    {timerParams.currentTask.title}
                </div>
            </div>
            <div className={styles.timerControls}>
                {timerParams.isWork && !timerParams.isPause && !timerParams.isBreak &&
                (<>
                    <button className={styles.startButton} onClick={timerParams.handlePause}>Пауза</button>
                    <button className={getTimerClassName(stopButtonParams)} onClick={timerParams.handleStop}
                            disabled={false}>
                        Стоп
                    </button>
                </>)}

                {!timerParams.isWork && !timerParams.isPause && !timerParams.isBreak &&
                (<>
                    <button className={styles.startButton} onClick={timerParams.handleStart}>Старт</button>
                    <button className={getTimerClassName(stopButtonParams)}
                            disabled={true}>
                        Стоп
                    </button>
                </>)}

                {timerParams.isPause && !timerParams.isBreak &&
                (<>
                    <button className={styles.proceedButton} onClick={timerParams.handlePause}>Продолжить</button>
                    <button className={styles.madeButton} onClick={timerParams.handleScip}>Сделано</button>
                </>)
                }

                {timerParams.isBreak && !timerParams.isPause &&
                (<>
                    <button className={styles.startButton} onClick={timerParams.handlePause}>Пауза</button>
                    <button className={styles.skipButton} onClick={timerParams.handleScip}>Пропустить</button>
                </>)
                }

                {timerParams.isBreak && timerParams.isPause &&
                (<>
                    <button className={styles.proceedButton} onClick={timerParams.handlePause}>Продолжить</button>
                    <button className={styles.skipButton + " " + styles.skipButtonOnPause}
                            onClick={timerParams.handleScip}>
                        Пропустить
                    </button>
                </>)
                }
            </div>
            <div className={styles.renewalButton} onClick={timerParams.handleIncreaseTime}>
                <IncreaseTimeIcon/>
            </div>
        </div>
    );
}
