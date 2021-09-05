import React from 'react';
import styles from './menu.module.css';
import {Dropdown} from "../../../../Dropdown";
import {MenuButton} from "./MenuButton";
import {MenuItemsList} from "./MenuItemsList";

type Props = {
    id?: string
}

export function Menu({id}: Props) {
    return (
        <div className={styles.menu}>
            <Dropdown
                top={4}
                right={0}
                button={<MenuButton/>}>
                <div className={styles.dropdown}>
                    <MenuItemsList id={id}/>
                </div>
            </Dropdown>
        </div>
    );
}
