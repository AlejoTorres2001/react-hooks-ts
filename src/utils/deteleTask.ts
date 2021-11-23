import { Task } from "../interfaces/Task";
import { getTasks } from "./getTasks";
import { setTask } from "./setTasks";

//delete task from localstorage
export const deleteTask = (taskId:number) => {
    let tasks = getTasks();
    tasks = tasks.filter((task:Task) => task.id !== taskId);
    setTask(tasks);
}