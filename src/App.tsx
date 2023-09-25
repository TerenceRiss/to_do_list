import React, { useState } from "react";
import "./App.css";
import { Task } from "./components/Task";
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";
import Header from "./components/Header"; 
import TasksList from "./components/models/TasksList";

const App = () => {
  const title = "Liste de tâches"; 
  const tasks = data;
  const taskToEdit: any = null;

  const updateTaskState = (taskId: number) => {
    console.error("I need to be implemented");
  };

  //j'utilise useState pour gerer l'etat de la fenetre modale 
  const [showModal, setShowModal] = useState(false);

  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();
    console.error("I need to be implemented");
  };

  const editTask = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const deleteTask = (taskId: number) => {
    console.error("I need to be implemented");
  };

  return (
    <div className="main">
      <Header title={title} />
      <div className="task-list">
      <TasksList tasks={tasks} />
      </div>
      
      <button
        className="add-task-btn"
        onClick={() => setShowModal(true)}
      >
        +
      </button>
      <TaskFormModal
        show={showModal}
        handleClose={() => setShowModal(false)} // Fermez la fenêtre modale lorsque nécessaire
        addOrEditTask={addOrEditTask}
       
        initialValues={
          taskToEdit != null
            ? {
                id: taskToEdit.id,
                title: taskToEdit.title,
                description: taskToEdit.description,
              }
            : undefined
        }
      />
    </div>
  );
};

export default App;
