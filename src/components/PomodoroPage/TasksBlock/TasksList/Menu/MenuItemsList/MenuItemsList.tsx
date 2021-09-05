import React from 'react';
import styles from './menuitemslist.module.css';
import {DecreaseIcon, EditIcon, IncreaseIcon, DeleteIcon} from "../../../../../Icons";
import {useDispatch} from "react-redux";
import {decreasePomodoro, deleteTask, increasePomodoro} from "../../../../../../store/tasks/actions";

type Props = {
    id?: string
}

export function MenuItemsList({id}: Props) {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteTask(id))
    }

    const handleIncreasePomodoro = () => {
        dispatch(increasePomodoro(id))
    }

    const handleDecreasePomodoro = () => {
        dispatch(decreasePomodoro(id))
    }

    return (
        <ul className={styles.menuItemsList}>
            <li className={styles.menuItem} onClick={handleIncreasePomodoro}>
                <IncreaseIcon/>
                <span>Увеличить</span>
            </li>
            <li className={styles.menuItem} onClick={handleDecreasePomodoro}>
                <DecreaseIcon/>
                <span>Уменьшить</span>
            </li>
            <li className={styles.menuItem}>
                <EditIcon/>
                <span>Редактировать</span>
            </li>
            <li className={styles.menuItem} onClick={handleDelete}>
                <DeleteIcon/>
                <span>Удалить</span>
            </li>
        </ul>
    );
}
