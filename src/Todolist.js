import React, { useState } from "react";

const TodoList = ({ tasks }) => {
  // Le composant `TodoList` prend en entrée un tableau de tâches.

  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState(null);
  const [editTaskValue, setEditTaskValue] = useState("");

  // Le composant utilise un état pour suivre la liste des tâches, la tâche en cours de modification et la valeur de la tâche en cours de modification.

  const handleAddTask = () => {
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
    // Le composant `handleEditTask()` définit la tâche en cours de modification et la valeur de la tâche en cours de modification.
    setEditTask(task);
    setEditTaskValue(task.task);
  };

  const handleSaveTask = () => {
    // Le composant `handleSaveTask()` enregistre les modifications apportées à la tâche en cours de modification.
    setEditTask(null);
    setEditTaskValue("");
  };

  const handleDeleteTask = (task) => {
    // Le composant `handleDeleteTask()` supprime une tâche de la liste.
    tasks.splice(tasks.indexOf(task), 1);
  };

  // Le composant `TodoList` rend une liste de tâches.

  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        {tasks.map((task) => (
          // Chaque tâche est un élément de liste.
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => task.completed = !task.completed}
            />
            <span>{task.task}</span>
            <button onClick={() => handleEditTask(task)}>Modifier</button>
            <button onClick={() => handleDeleteTask(task)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Nouvelle tâche"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Ajouter</button>
      {editTask && (
        // Si une tâche est en cours de modification, le composant `TodoList` rend une section de modification de tâche.
        <div>
          <h2>Modifier la tâche</h2>
          <input
            type="text"
            value={editTaskValue}
            onChange={(e) => setEditTaskValue(e.target.value)}
          />
          <button onClick={handleSaveTask}>Enregistrer</button>
        </div>
      )}
    </div>
  );
};

// Le composant `TodoList` est exporté pour qu'il puisse être utilisé dans d'autres composants.
export default TodoList;