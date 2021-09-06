import React from 'react';
import styles from './taskslist.module.css';
import {Menu} from "./Menu";
import {ITasksData} from "../../../../store/tasks/actions";
import {getTotalTime} from "../../../../utils/getTotalTime";

type Props = {
    tasks?: ITasksData[]
}

export function TasksList({tasks}: Props) {
    return (
        <div className={styles.tasksList}>
            <ul>
                <div className={styles.divider}/>
                {tasks?.map((task) => (
                    <div key={task.id}>
                        <li>
                            <Menu id={task.id}/>
                            <div className={styles.pomodoroCounter}>{task.pomodoro_count}</div>
                            <div className={styles.taskTitle}>{task.title}</div>
                        </li>
                        <div className={styles.divider}/>
                    </div>
                ))}
            </ul>
            <span className={styles.timeCount}>
                {tasks ? getTotalTime(tasks) : ""}
            </span>
        </div>
    );
}
