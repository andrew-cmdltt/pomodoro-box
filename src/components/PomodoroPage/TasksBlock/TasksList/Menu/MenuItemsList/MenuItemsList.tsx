import React from 'react';
import styles from './menuitemslist.module.css';
import {DecreaseIcon, EditIcon, IncreaseIcon, DeleteIcon} from "../../../../../Icons";

export function MenuItemsList() {
    return (
        <ul className={styles.menuItemsList}>
            <li className={styles.menuItem}>
                <IncreaseIcon/>
                <span>Увеличить</span>
            </li>
            <li className={styles.menuItem}>
                <DecreaseIcon/>
                <span>Уменьшить</span>
            </li>
            <li className={styles.menuItem}>
                <EditIcon/>
                <span>Редактировать</span>
            </li>
            <li className={styles.menuItem}>
                <DeleteIcon/>
                <span>Удалить</span>
            </li>
        </ul>
    );
}
