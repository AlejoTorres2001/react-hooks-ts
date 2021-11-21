import { Task } from "../interfaces/Task"

const TaskForm = () => {
    //save task on localstorage
    const saveTask = (task: Task) => {

    }
    return (
        //make a form to create new tasks with boostrap
        <form onSubmit={()=>{}}>
            <div className="form-group">
                <label htmlFor="task-name">Task Name</label>
                <input type="text" className="form-control" id="task-name" placeholder="Enter task name" />
            </div>
            <div className="form-group">
                <label htmlFor="task-description">Task Description</label>
                <textarea className="form-control" id="task-description" placeholder="Enter task description" rows={3}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default TaskForm
