import TaskCardProps from "../interfaces/TaskCardProps"

const TaskCard = ({task}:TaskCardProps) => {
    return (
      // make a card container with bootstrap
      <div className="card" key={task.id}>
        <div className="card-body">
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text">{task.description}</p>
          <button onClick={()=>{}} className="btn btn-primary m-3">
            Update
          </button>
          <button onClick={()=>{}} className="btn btn-danger m-3">
            Delete
          </button>
        </div>
      </div>
    );
}

export default TaskCard
