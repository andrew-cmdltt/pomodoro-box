import React, {ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from 'react';
import {editTask} from "../../../../../store/tasks/actions";
import {useDispatch} from "react-redux";

type Props = {
    id?: string
    title?: string
    setIsEdit: Dispatch<SetStateAction<boolean>>
}

export function TaskEditForm({title, id, setIsEdit}: Props) {
    const dispatch = useDispatch()

    const [value, setValue] = useState(title)

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        dispatch(editTask({id: id, title: value}))
        console.log("submited")
        setIsEdit(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange}/>
        </form>
    );
}
