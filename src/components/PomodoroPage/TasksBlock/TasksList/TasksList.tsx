import React, {useState} from 'react';
import styles from './taskslist.module.css';
import {Menu} from "./Menu";
import {decreasePomodoro, increasePomodoro, ITasksData} from "../../../../store/tasks/actions";
import {getTotalTime} from "../../../../utils/getTotalTime";
import {useDispatch} from "react-redux";
import {TaskEditForm} from "./TaskEditForm";

type Props = {
    tasks?: ITasksData[]
}

export function TasksList({tasks}: Props) {
    const [isEdit, setIsEdit] = useState(false)

    const dispatch = useDispatch()

    const handleIncreasePomodoro = (id?: string) => {
        dispatch(increasePomodoro({id: id}))
    }

    const handleDecreasePomodoro = (id?: string) => {
        dispatch(decreasePomodoro({id: id}))
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
                                setIsEdit={setIsEdit}
                                handleIncreasePomodoro={handleIncreasePomodoro}
                            />
                            <div className={styles.pomodoroCounter}>{task.pomodoro_count}</div>
                            <div className={styles.taskTitle}>
                                {isEdit ? (
                                    <TaskEditForm title={task.title} setIsEdit={setIsEdit} id={task.id}/>
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
