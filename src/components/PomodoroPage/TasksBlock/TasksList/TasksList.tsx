import React from 'react';
import styles from './taskslist.module.css';
import {Menu} from "./Menu";
import {decreasePomodoro, increasePomodoro, ITasksData, setEditTask} from "../../../../store/tasks/actions";
import {getTotalTime} from "../../../../utils/getTotalTime";
import {useDispatch} from "react-redux";
import {TaskEditForm} from "./TaskEditForm";

type Props = {
    tasks?: ITasksData[]
}

export function TasksList({tasks}: Props) {
    const dispatch = useDispatch()

    const handleIncreasePomodoro = (id?: string) => {
        dispatch(increasePomodoro({id: id}))
    }

    const handleDecreasePomodoro = (id?: string) => {
        dispatch(decreasePomodoro({id: id}))
    }

    const handleSetEditTask = (id?: string, isEdit?: boolean) => {
        dispatch(setEditTask({id: id, isEdit: isEdit}))
    }

    return (
        <div className={styles.tasksList}>
            <ul>
                <div className={styles.divider}/>
                {tasks?.map((task) => (
                    <div key={task.id}>
                        <li>
                            <Menu
                                id={task.id}
                                handleDecreasePomodoro={handleDecreasePomodoro}
                                handleSetEditTask={handleSetEditTask}
                                handleIncreasePomodoro={handleIncreasePomodoro}
                            />
                            <div className={styles.pomodoroCounter}>{task.pomodoro_count}</div>
                            <div className={styles.taskTitle}>
                                {task.isEdit ? (
                                    <TaskEditForm title={task.title} id={task.id}/>
                                ) :
                                    (<>{task.title}</>)
                                }

                            </div>
                        </li>
                        <div className={styles.divider}/>
                    </div>
                ))}
            </ul>
            <span className={styles.timeCount}>
                {tasks ? getTotalTime(tasks) : ""}
            </span>
        </div>
    );
}
