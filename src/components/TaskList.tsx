import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";
import TaskListProps from "../interfaces/TaskListProps";
const TaskList = ({
  tasks,
  deleteTaskCallBack,
  updateTaskCallBack,
}: TaskListProps) => {
  return (
    <div>
      {tasks.map((task: Task) => {
        return (
          <TaskCard
            task={task}
            deleteTaskCallBack={deleteTaskCallBack}
            updateTaskCallBack={updateTaskCallBack}
          ></TaskCard>
        );
      })}
    </div>
  );
};

export default TaskList;
