// components/TasksList.tsx
import React from "react";
import { TaskType } from "../models/Task";
import { Task } from "../Task";

interface TasksListProps {
  tasks: TaskType[]; // Prop pour transmettre la liste des tâches
}

const TasksList = ({ tasks }: TasksListProps) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
