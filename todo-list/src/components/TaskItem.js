import React from "react";

const TaskItem = ({ task, updateTask, deleteTask, markTaskAsCompleted }) => {
  return (
    <div style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => updateTask(task.id)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => markTaskAsCompleted(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
};

export default TaskItem;
