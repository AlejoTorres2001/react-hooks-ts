import { useState } from "react";
import TaskCardProps from "../interfaces/TaskCardProps";
const TaskCard = ({
  task,
  deleteTaskCallBack,
  updateTaskCallBack,
}: TaskCardProps) => {
  const [taskData, setTaskData] = useState(task);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="card" key={taskData.id}>
      <div className="card-body d-flex">
        <div>
          <h5 className="card-title m-2">{taskData.title}</h5>
          <p className="card-text m-2">{taskData.description}</p>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="btn btn-primary m-3"
          >
            Update
          </button>
          <button
            onClick={() => {
              deleteTaskCallBack(taskData.id);
            }}
            className="btn btn-danger m-3"
          >
            Delete
          </button>
        </div>

        {isEditing && (
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <h5>Title</h5>
              <input
                type="text"
                className="form-control m-1"
                value={taskData.title}
                onChange={(e) => {
                  setTaskData({ ...taskData, title: e.target.value });
                }}
              />
              <h5>description</h5>

              <textarea
                className="form-control m-1"
                value={taskData.description}
                rows={3}
                onChange={(e) => {
                  setTaskData({ ...taskData, description: e.target.value });
                }}
              ></textarea>
            </div>
            <button
              onClick={() => {
                updateTaskCallBack(taskData);
                setIsEditing(!isEditing);
              }}
              className="btn btn-success m-3"
            >
              Confirm
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
