import React, {ChangeEvent, FormEvent, useState} from 'react';
import {TaskForm} from "../TaskForm";
import {addTask, deleteTask} from "../../../../store/tasks/actions";
import {useDispatch} from "react-redux";
// const uuid = require("uuid");

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
                // id: uuid.v4(),
                id: "045f48e8-14ed-4750-8f53-523d748f031c",
                title: value,
                pomodoro_count: 1
            }))
            dispatch(deleteTask("045f48e8-14ed-4750-8f53-523d748f031c"))
        }
    }

    return (
        <TaskForm value={value} onChange={handleChange} onSubmit={handleSubmit} error={error}/>
    );
}
