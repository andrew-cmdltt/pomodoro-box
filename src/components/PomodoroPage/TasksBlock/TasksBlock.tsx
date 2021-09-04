import React from 'react';
import styles from './tasksblock.module.css';
import {Instruction} from "./Instruction";
import {TasksList} from "./TasksList";
import {TaskFormContainer} from "./TaskFormContainer";

export function TasksBlock() {
  return (
    <div className={styles.tasksBlock}>
      <Instruction />
      <TaskFormContainer />
      <TasksList />
    </div>
  );
}
