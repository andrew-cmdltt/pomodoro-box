import React from 'react';
import styles from './dayofweekblock.module.css';
import {getWeekDay} from "../../../utils/getWeekDay";

export function DayOfWeekBlock() {
    return (
        <div className={styles.dayOfWeekBlock}>
            <div className={styles.title}>
                Ваша активность
            </div>
            <div className={styles.weekOfDayCard}>
                <div className={styles.cardTitle}>
                    {getWeekDay(new Date(), "full")}
                </div>
                <div className={styles.cardDescription}>
                    Вы работали над задачами <br/>в течение <span>51 минуты</span>
                </div>
            </div>
        </div>
    );
}
