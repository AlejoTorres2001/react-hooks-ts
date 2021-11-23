import { Task } from "../interfaces/Task";

export const setTask = (tasks: Task[]) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}