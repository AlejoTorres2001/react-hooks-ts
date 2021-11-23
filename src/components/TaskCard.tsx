import { useState } from "react";
import TaskCardProps from "../interfaces/TaskCardProps"

const TaskCard = ({task,deleteTaskCallBack}:TaskCardProps) => {
  const [taskData, setTaskData] = useState(task);
    return (
      // make a card container with bootstrap
      <div className="card" key={taskData.id}>
        <div className="card-body">
          <h5 className="card-title">{taskData.title}</h5>
          <p className="card-text">{taskData.description}</p>
          <button onClick={()=>{}} className="btn btn-primary m-3">
            Update
          </button>
          <button onClick={()=>{
            deleteTaskCallBack(taskData.id);
          }} className="btn btn-danger m-3">
            Delete
          </button>
        </div>
      </div>
    );
}

export default TaskCard
