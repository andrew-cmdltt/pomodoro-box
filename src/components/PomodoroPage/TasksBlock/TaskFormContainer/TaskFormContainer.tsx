import React, {ChangeEvent, FormEvent, useState} from 'react';
import {TaskForm} from "../TaskForm";

export function TaskFormContainer() {
    const [value, setValue] = useState("")
    const [error, setError] = useState("")

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        if (value.length < 4) {
            setError("Введите значение более 3-х символов")
        } else {
            setError("")
            console.log("Форма отправлена")
        }
    }

    return (
        <TaskForm value={value} onChange={handleChange} onSubmit={handleSubmit} error={error}/>
    );
}
