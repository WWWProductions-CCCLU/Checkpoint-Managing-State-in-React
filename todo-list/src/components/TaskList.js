import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, updateTask, deleteTask, markTaskAsCompleted }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
          markTaskAsCompleted={markTaskAsCompleted}
        />
      ))}
    </div>
  );
};

export default TaskList;
