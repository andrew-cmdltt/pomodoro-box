import React from 'react';
import styles from './tasksblock.module.css';
import {Instruction} from "./Instruction";
import {TasksList} from "./TasksList";
import {TaskFormContainer} from "./TaskFormContainer";
import {ITasksData} from "../../../store/tasks/actions";

type Props = {
    isWork: boolean
    tasks: ITasksData[]
}

export function TasksBlock({isWork, tasks}: Props) {
    return (
        <div className={styles.tasksBlock}>
            <Instruction/>
            <TaskFormContainer/>
            {tasks.length > 0 && !isWork && (<TasksList tasks={tasks}/>)}
        </div>
    );
}
