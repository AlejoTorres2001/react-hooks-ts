import { useState } from "react";
import "./App.css";
import { AppProps } from "./interfaces/AppProps";
import "bootswatch/dist/darkly/bootstrap.min.css"
import logo from "./logo.svg";
import TaskList from "./components/TaskList";
import { Task } from "./interfaces/Task";
import {TasksData} from "./TasksData"
import TaskForm from "./components/TaskForm";
export function App({ title }: AppProps) {
  const [tasks, setTasks] = useState<Task[]>(TasksData);
  return (
    <div className="bg-dark" style={{height:"100vh"}}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="react logo" style={{width:"4rem"}}/>
            {title}
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <TaskForm></TaskForm>
        <div className="row">
        <TaskList tasks={tasks}></TaskList>
        </div>
      </main>
      
    </div>
  );
}
