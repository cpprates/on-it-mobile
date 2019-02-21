import { Task } from "./task.model";
import { Injectable } from "@angular/core";

@Injectable()
export class TaskService {
    private selectedTask: Task;

    set(task: Task) {
        this.selectedTask = task;
    }

    get(): Task {
        return this.selectedTask;
    }

}
