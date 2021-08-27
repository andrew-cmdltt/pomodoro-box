import React from 'react';
import styles from './taskform.module.css';

export function TaskForm() {
    return (
        <div className={styles.taskForm}>
            <input type="text" className={styles.input} placeholder="Название задачи"/>
            <button className={styles.button}>
                Добавить
            </button>
        </div>
    );
}
