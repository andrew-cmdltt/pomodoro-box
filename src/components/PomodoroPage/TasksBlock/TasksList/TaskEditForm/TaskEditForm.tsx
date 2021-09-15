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

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        dispatch(editTask({id: id, title: value}))
        dispatch(setEditTask({id: id, isEdit: false}))
    }

    return (
        <form onSubmit={handleSubmit} className={styles.taskEditForm}>
            <input type="text" value={value} onChange={handleChange}/>
        </form>
    );
}
