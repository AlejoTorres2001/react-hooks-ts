import { Task } from "../interfaces/Task";

export const updateTasks = (task: Task) => {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const updatedTasks = tasks.map((t: Task) => (t.id === task.id ? task : t));
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};
