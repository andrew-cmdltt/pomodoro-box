import React from 'react';
import styles from './dayofweekblock.module.css';

export function DayOfWeekBlock() {
    return (
        <div className={styles.dayOfWeekBlock}>
            <div className={styles.title}>
                Ваша активность
            </div>
            <div className={styles.weekOfDayCard}>
                <div className={styles.cardTitle}>
                    Понедельник
                </div>
                <div className={styles.cardDescription}>
                    Вы работали над задачами <br/>в течение <span>51 минуты</span>
                </div>
            </div>
        </div>
    );
}
