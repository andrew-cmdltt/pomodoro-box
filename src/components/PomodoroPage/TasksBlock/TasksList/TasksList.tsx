import React from 'react';
import styles from './taskslist.module.css';
import {Menu} from "./Menu";

export function TasksList() {
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
