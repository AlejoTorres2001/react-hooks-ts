import { Task } from "./Task";

export default interface TaskCardProps {
  task: Task;
  deleteTaskCallBack: Function;
  updateTaskCallBack: Function;
}
