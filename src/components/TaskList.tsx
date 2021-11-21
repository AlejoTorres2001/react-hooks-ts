import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";
import TaskListProps from "../interfaces/TaskListProps";
const TaskList = ({tasks}:TaskListProps) => {
    return (
        <div>
             {tasks.map((task:Task) => {
        return (
          <TaskCard task={task}></TaskCard>
        );
      })}
        </div>
    )
}

export default TaskList
