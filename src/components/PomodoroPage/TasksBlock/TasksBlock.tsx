import React from 'react';
import styles from './tasksblock.module.css';
import {Instruction} from "./Instruction";
import {TasksList} from "./TasksList";
import {TaskFormContainer} from "./TaskFormContainer";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducer";
import {TaskState} from "../../../store/tasks/reduser";

export function TasksBlock() {
    const tasks = useSelector<RootState, TaskState>(state => state.tasks);

    return (
        <div className={styles.tasksBlock}>
            <Instruction/>
            <TaskFormContainer/>
            <TasksList tasks={tasks}/>
        </div>
    );
}
