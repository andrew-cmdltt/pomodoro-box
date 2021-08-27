import React from 'react';
import styles from './tasksblock.module.css';
import {Instruction} from "./Instruction";
import {TaskForm} from "./TaskForm";
import {TasksList} from "./TasksList";

export function TasksBlock() {
  return (
    <div>
      <Instruction />
      <TaskForm />
      <TasksList />
    </div>
  );
}
