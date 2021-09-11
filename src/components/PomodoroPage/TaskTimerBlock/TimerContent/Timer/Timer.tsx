import React from 'react';
import styles from './timer.module.css';
import {getTimerValue} from "../../../../../utils/getTimerValue";
import {IncreaseTimeIcon} from "../../../../Icons/IncreaseTimeIcon";
import {getTimerClassName, Params} from "../../../../../utils/getTimerHeaderClass";

type Props = {
    pomodoroCount: number
    minutes: number
    seconds: number
    handleStart: () => void
    handlePause: () => void
    handleIncreaseTime: () => void
    isBreak: boolean
    isWork: boolean
    isPause: boolean
}

export function Timer(props: Props) {
    const timerValueParams: Params = {
        isStart: props.isWork,
        isBreak: props.isBreak,
        defaultClass: styles.timerValue,
        onBreakClass: styles.break,
        onWorkClass: styles.work,
    }

    const stopButtonParams: Params = {
        isStart: props.isWork,
        isBreak: props.isBreak,
        defaultClass: styles.stopButton,
        onBreakClass: styles.break,
        onWorkClass: styles.stopButtonOnWork,
    }

    return (
        <div className={styles.timer}>
            <div className={getTimerClassName(timerValueParams)}>
                {getTimerValue(props.minutes, props.seconds)}
            </div>
            <div className={styles.timerLabel}>
                <div className={styles.taskNumber}>
                    Задача 1 - <br/>
                </div>
                <div className={styles.taskTitle}>
                    Сверстать сайт
                </div>
            </div>
            <div className={styles.timerControls}>
                {props.isWork && !props.isPause && !props.isBreak &&
                (<>
                    <button className={styles.startButton} onClick={props.handlePause}>Пауза</button>
                    <button className={getTimerClassName(stopButtonParams)} onClick={props.handlePause}
                            disabled={false}>
                        Стоп
                    </button>
                </>)}

                {!props.isWork && !props.isPause && !props.isBreak &&
                (<>
                    <button className={styles.startButton} onClick={props.handleStart}>Старт</button>
                    <button className={getTimerClassName(stopButtonParams)} onClick={props.handlePause}
                            disabled={true}>
                        Стоп
                    </button>
                </>)}

                {props.isPause && !props.isBreak &&
                (<>
                    <button className={styles.proceedButton} onClick={props.handlePause}>Продолжить</button>
                    <button className={styles.madeButton} onClick={props.handlePause}>Сделано</button>
                </>)
                }

                {props.isBreak && !props.isPause &&
                (<>
                    <button className={styles.startButton} onClick={props.handlePause}>Пауза</button>
                    <button className={styles.skipButton} onClick={props.handlePause}>Пропустить</button>
                </>)
                }

                {props.isBreak && props.isPause &&
                (<>
                    <button className={styles.proceedButton} onClick={props.handlePause}>Продолжить</button>
                    <button className={styles.skipButton + " " + styles.skipButtonOnPause} onClick={props.handlePause}>
                        Пропустить
                    </button>
                </>)
                }
            </div>
            <div className={styles.renewalButton} onClick={props.handleIncreaseTime}>
                <IncreaseTimeIcon/>
            </div>
        </div>
    );
}
