import { useState } from "react";
import { Task } from "../interfaces/Task";
import { TaskFormProps } from "../interfaces/TaskFormProps";
import { getTasks } from "../utils/getTasks";
import { setTask } from "../utils/setTasks";

const TaskForm = ({ addTaskCallback }: TaskFormProps) => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
  });
  const saveTask = (task: Task) => {
    const tasks = getTasks();
    task.id = tasks.length + 1;
    tasks.push(task);
    setTask(tasks);
    addTaskCallback();
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    var task: Task = {
      id: 0,
      title: taskData.title,
      description: taskData.description,
      done: false,
    };
    saveTask(task);
  };
  return (
    //make a form to create new tasks with boostrap
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="task-name">Task Name</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="Enter task name"
          value={taskData.title}
          onChange={(e) => {
            setTaskData({ ...taskData, title: e.target.value });
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="task-description">Task Description</label>
        <textarea
          value={taskData.description}
          className="form-control"
          id="description"
          placeholder="Enter task description"
          rows={3}
          name="description"
          onChange={(e) => {
            setTaskData({ ...taskData, description: e.target.value });
          }}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default TaskForm;
