import { useState } from "react";
import "./App.css";
import { AppProps } from "./interfaces/AppProps";
import "bootswatch/dist/darkly/bootstrap.min.css";
import logo from "./logo.svg";
import TaskList from "./components/TaskList";
import { Task } from "./interfaces/Task";
import TaskForm from "./components/TaskForm";
import { getTasks } from "./utils/getTasks";
import { deleteTask } from "./utils/deteleTask";
import { updateTasks } from "./utils/updateTasks";
export function App({ title }: AppProps) {
  const [tasks, setTasks] = useState<Task[]>(getTasks());
  const handleAddTask = () => {
    setTasks(getTasks());
  };
  const handleDeleteTask = (id: number) => {
    deleteTask(id);
    setTasks(getTasks());
  };
  const handleEditTask = (task: Task) => {
    updateTasks(task);
    setTasks(getTasks());
  };
  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="react logo" style={{ width: "4rem" }} />
            {title}
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <TaskForm addTaskCallback={handleAddTask}></TaskForm>
        <div className="row">
          <TaskList
            tasks={tasks}
            deleteTaskCallBack={handleDeleteTask}
            updateTaskCallBack={handleEditTask}
          ></TaskList>
        </div>
      </main>
    </div>
  );
}
