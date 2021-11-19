import { useState } from "react";
import "./App.css";
import { Props } from "./interfaces/Props";
import { Task } from "./interfaces/Task";
export function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, 
      title: "Task 1", 
      done: false, 
      description: "Description 1" },
  ]);
  return (
    <div className="App">
      <h1>{title}</h1>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </div>
        );
      })}
    </div>
  );
}
