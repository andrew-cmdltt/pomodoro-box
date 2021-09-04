import React from 'react';
import styles from './menu.module.css';
import {Dropdown} from "../../../../Dropdown";
import {MenuButton} from "./MenuButton";
import {MenuItemsList} from "./MenuItemsList";

export function Menu() {
    return (
        <div className={styles.menu}>
            <Dropdown
                top={4}
                right={0}
                button={<MenuButton/>}>
                <div className={styles.dropdown}>
                    <MenuItemsList />
                </div>
            </Dropdown>
        </div>
    );
}
