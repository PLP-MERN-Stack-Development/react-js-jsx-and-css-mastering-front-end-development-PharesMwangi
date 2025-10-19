// src/routes/tasks.jsx
import React from "react";
import TaskManager from "../components/TaskManager";
import ApiData from "../components/ApiData";

const Tasks = () => {
  return (
    <div className="space-y-6">
      <TaskManager />
      <ApiData />
    </div>
  );
};

export default Tasks;
