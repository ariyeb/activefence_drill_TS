interface ITasksGroup {
    skip: number;
    limit: number;
}

class TasksGroup implements ITasksGroup {
    constructor(
        public skip: number,
        public limit: number
    ) { }

    toString() {
        return JSON.stringify(this);
    }
}
export { TasksGroup, ITasksGroup };