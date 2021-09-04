import React from 'react';
import styles from './taskslist.module.css';
import {Menu} from "./Menu";
import {RootState} from "../../../../store/reducer";
import {useSelector} from "react-redux";

export function TasksList() {
    const tasks = useSelector<RootState>(state => state.tasks);
    console.log(tasks)

    return (
        <ul className={styles.tasksList}>
            <div className={styles.divider}/>
            <li>
                <div className={styles.pomodoroCounter}>1</div>
                <div className={styles.taskTitle}>Сверстать сайт</div>
                <Menu />
            </li>
            <div className={styles.divider}/>
            <li>
                <div className={styles.pomodoroCounter}>2</div>
                <div className={styles.taskTitle}>Проверить валидность</div>
                <Menu />
            </li>
            <div className={styles.divider}/>
            <li>
                <div className={styles.pomodoroCounter}>2</div>
                <div className={styles.taskTitle}>Проверить валидность</div>
                <Menu />
            </li>
            <div className={styles.divider}/>
        </ul>
    );
}
