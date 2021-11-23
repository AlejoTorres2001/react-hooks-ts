export const getTasks = () => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
        return JSON.parse(tasks);
    }
    return [];
}
