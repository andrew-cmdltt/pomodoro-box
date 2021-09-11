import React, {Dispatch, SetStateAction} from 'react';
import styles from './menu.module.css';
import {Dropdown} from "../../../../Dropdown";
import {MenuButton} from "./MenuButton";
import {MenuItemsList} from "./MenuItemsList";

type Props = {
    id?: string
    handleIncreasePomodoro: (id?: string) => void
    handleDecreasePomodoro: (id?: string) => void
    setIsEdit: Dispatch<SetStateAction<boolean>>
}

export function Menu({handleDecreasePomodoro, setIsEdit, handleIncreasePomodoro, id}: Props) {
    return (
        <div className={styles.menu}>
            <Dropdown
                top={4}
                right={-370}
                button={<MenuButton/>}>
                <div className={styles.dropdown}>
                    <MenuItemsList
                        id={id}
                        handleDecreasePomodoro={handleDecreasePomodoro}
                        setIsEdit={setIsEdit}
                        handleIncreasePomodoro={handleIncreasePomodoro}
                    />
                </div>
            </Dropdown>
        </div>
    );
}
