import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({ name: "", description: "" });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name && task.description) {
      addTask(task);
      setTask({ name: "", description: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={task.name}
        onChange={handleChange}
        placeholder="Task Name"
        required
      />
      <input
        type="text"
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
