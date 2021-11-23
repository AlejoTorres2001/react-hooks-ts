import { Task } from "../interfaces/Task";

//update tasks from localstorage
export const updateTasks = (task:Task) => {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    console.log(task);
    console.log(tasks)
    const updatedTasks = tasks.map( (t:Task) => t.id === task.id ? task : t);
    console.log(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}