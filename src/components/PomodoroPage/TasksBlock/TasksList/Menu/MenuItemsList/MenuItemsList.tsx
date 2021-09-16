import React from 'react';
import styles from './menuitemslist.module.css';
import {DecreasePomodoroIcon, EditIcon, IncreasePomodoroIcon, DeleteIcon} from "../../../../../Icons";
import { Link } from 'react-router-dom';

type Props = {
    id?: string
    handleIncreasePomodoro: (id?: string) => void
    handleDecreasePomodoro: (id?: string) => void
    handleSetEditTask: (id?: string, isEdit?: boolean) => void
    pomodoroCount: number
}

export function MenuItemsList({handleDecreasePomodoro, handleSetEditTask, handleIncreasePomodoro, id, pomodoroCount}: Props) {
    const menuItemDecreaseClass = pomodoroCount === 1 ? styles.menuItem + " " + styles.disabled : styles.menuItem

    return (
        <ul className={styles.menuItemsList}>
            <li className={styles.menuItem} onClick={() => handleIncreasePomodoro(id)}>
                <IncreasePomodoroIcon/>
                <span>Увеличить</span>
            </li>
            <li className={menuItemDecreaseClass} onClick={() => handleDecreasePomodoro(id)}>
                <DecreasePomodoroIcon />
                <span>Уменьшить</span>
            </li>
            <li className={styles.menuItem} onClick={() => handleSetEditTask(id, true)}>
                <EditIcon/>
                <span>Редактировать</span>
            </li>
            <li className={styles.menuItem}>

                <Link to={`/delete/${id}`}>
                    <DeleteIcon/>
                    <span>Удалить</span>
                </Link>
            </li>
        </ul>
    );
}
