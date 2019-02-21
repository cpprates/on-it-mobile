import { Component, OnInit } from "@angular/core";
import { TaskService } from "../shared/task/task.service";
import { Task } from "../shared/task/task.model";

@Component({
	selector: "Item",
	moduleId: module.id,
	templateUrl: "./item.component.html"

})
export class ItemComponent implements OnInit {
	public task: Task;

	constructor(private taskService: TaskService) {
	}

	ngOnInit(): void {
		this.task = this.taskService.get();
	}
}