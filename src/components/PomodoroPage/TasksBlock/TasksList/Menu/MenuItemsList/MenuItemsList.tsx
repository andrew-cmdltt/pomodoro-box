import React from 'react';
import styles from './menuitemslist.module.css';
import {DecreasePomodoroIcon, EditIcon, IncreasePomodoroIcon, DeleteIcon} from "../../../../../Icons";
import {useDispatch} from "react-redux";
import {decreasePomodoro, increasePomodoro} from "../../../../../../store/tasks/actions";
import { Link } from 'react-router-dom';

type Props = {
    id?: string
}

export function MenuItemsList({id}: Props) {
    const dispatch = useDispatch()

    const handleIncreasePomodoro = () => {
        dispatch(increasePomodoro(id))
    }

    const handleDecreasePomodoro = () => {
        dispatch(decreasePomodoro(id))
    }

    return (
        <ul className={styles.menuItemsList}>
            <li className={styles.menuItem} onClick={handleIncreasePomodoro}>
                <IncreasePomodoroIcon/>
                <span>Увеличить</span>
            </li>
            <li className={styles.menuItem} onClick={handleDecreasePomodoro}>
                <DecreasePomodoroIcon/>
                <span>Уменьшить</span>
            </li>
            <li className={styles.menuItem}>
                <EditIcon/>
                <span>Редактировать</span>
            </li>
            <li className={styles.menuItem}>
                <DeleteIcon/>
                <Link to={`/delete/${id}`}><span>Удалить</span></Link>
            </li>
        </ul>
    );
}
