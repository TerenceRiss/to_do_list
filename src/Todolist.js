import React, { useState } from "react";

const TodoList = ({ tasks }) => {
  // Le composant `TodoList` prend en entrée un tableau de tâches.

  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState(null);
  const [editTaskValue, setEditTaskValue] = useState("");

  // Le composant utilise un état pour suivre la liste des tâches, la tâche en cours de modification et la valeur de la tâche en cours de modification.const handleAddTask = () => {
    // Le composant `handleAddTask()` ajoute une nouvelle tâche à la liste.
    if (newTask) {
        tasks.push({
          id: Date.now(),
          task: newTask,
          completed: false,
        });
        setNewTask("");
      }
    };

    const handleEditTask = (task) => {
        //le composant 'handleEditTask()' définit la tache en cours de modification, et la valeur de la tache en cours de modifiation
        setEditTask(task);
        setEditTaskValue(task.task);
    };

    const handleSaveTask = () => {
        //handleTaskSave enregistre les modifications apporte a la tache en cours 
        setEditTask(null);
        setEditTaskValue("");
    };

    const handleDeleteTask = (task) => {
        //ici on supprime une tache 
        task.splice(task.indexOf(task), 1);
    };

    //le composant todolist rend une liste de tâches.

    