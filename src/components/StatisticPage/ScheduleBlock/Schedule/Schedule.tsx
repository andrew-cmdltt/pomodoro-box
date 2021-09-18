import React from 'react';
import styles from './schedule.module.css';

export function Schedule() {
    return (
        <div className={styles.schedule}>
            <div className={styles.dayOfWeekAxis}>
                <ul>
                    <li>
                        <span>Пн</span>
                        <div className={styles.scale}/>
                    </li>
                    <li>
                        <span>Вт</span>
                        <div className={styles.scale}/>
                    </li>
                    <li>
                        <span>Ср</span>
                        <div className={styles.scale}/>
                    </li>
                    <li>
                        <span>Чт</span>
                        <div className={styles.scale}/>
                    </li>
                    <li>
                        <span>Пт</span>
                        <div className={styles.scale}/>
                    </li>
                    <li>
                        <span>Сб</span>
                        <div className={styles.scale}/>
                    </li>
                    <li>
                        <span>Вс</span>
                        <div className={styles.scale}/>
                    </li>
                </ul>
            </div>
            <div className={styles.timeAxis}>
                <ul>
                    <li>
                        <div className={styles.divider}/>
                        <span>1 ч 40 мин</span>
                    </li>
                    <li>
                        <div className={styles.divider}/>
                        <span>1 ч 15 мин</span>
                    </li>
                    <li>
                        <div className={styles.divider}/>
                        <span>50 мин</span>
                    </li>
                    <li>
                        <div className={styles.divider}/>
                        <span>25 мин</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
