import React, {ChangeEvent, FormEvent, useState} from 'react';
import {TaskForm} from "../TaskForm";
import {addTask} from "../../../../store/tasks/actions";
import {useDispatch} from "react-redux";

export function TaskFormContainer() {
    const [value, setValue] = useState("")
    const [error, setError] = useState("")
    const dispatch = useDispatch();

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        if (value.length < 4) {
            setError("Введите значение более 3-х символов")
        } else {
            setError("")
            dispatch(addTask({
                title: value,
                pomodoro_count: 1
            }))
            console.log("Форма отправлена")
        }
    }

    return (
        <TaskForm value={value} onChange={handleChange} onSubmit={handleSubmit} error={error}/>
    );
}
