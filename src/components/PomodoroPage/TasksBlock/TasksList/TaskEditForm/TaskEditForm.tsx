import React, {ChangeEvent, FormEvent, useState} from 'react';
import {editTask, setEditTask} from "../../../../../store/tasks/actions";
import {useDispatch} from "react-redux";
import styles from './taskeditform.module.css'

type Props = {
    id?: string
    title?: string
}

export function TaskEditForm({title, id}: Props) {
    const dispatch = useDispatch()

    const [value, setValue] = useState(title)
    const [error, setError] = useState("")

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        if (value) {
            if (value.length < 4) {
                setError("Введите значение более 3-х символов")
            } else {
                setError("")
                dispatch(editTask({id: id, title: value}))
                dispatch(setEditTask({id: id, isEdit: false}))
            }
        }

    }

    return (
        <form onSubmit={handleSubmit} className={styles.taskEditForm}>
            <input type="text" value={value} onChange={handleChange}/>
            <span className={styles.error}>{error}</span>
        </form>
    );
}
