import React from 'react';
import styles from './taskslist.module.css';
import {Menu} from "./Menu";
import {TaskState} from "../../../../store/tasks/reduser";

type Props = {
    tasks?: TaskState
}

export function TasksList({tasks}: Props) {
    return (
        <ul className={styles.tasksList}>
            <div className={styles.divider}/>

            {tasks?.data.map((task) => (
                <div key={task.id}>
                    <li>
                        <div className={styles.pomodoroCounter}>{task.pomodoro_count}</div>
                        <div className={styles.taskTitle}>{task.title}</div>
                        <Menu />
                    </li>
                    <div className={styles.divider}/>
                </div>
            ))}
        </ul>
    );
}
