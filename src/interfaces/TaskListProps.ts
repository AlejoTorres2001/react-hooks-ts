import { Task } from "./Task";
export default interface TaskListProps {
  tasks: Task[];
  deleteTaskCallBack: Function;
  updateTaskCallBack: Function;
}
