import React from 'react';
import styles from './scalesblock.module.css';
import {Schedule} from "./Schedule";

export function ScheduleBlock() {
    return (
        <div>
            <ul className={styles.statisticDropdown}>
                <li>
                    <span>Эта неделя</span>
                    <div>
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L8 2L15 9" stroke="#B7280F" strokeWidth="2"/>
                        </svg>
                    </div>
                </li>
                {/*<li>Прошлая неделя</li>*/}
                {/*<li>2 недели назад</li>*/}
            </ul>
            <Schedule/>
        </div>

    );
}
