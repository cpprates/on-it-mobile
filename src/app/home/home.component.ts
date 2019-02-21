import { ItemEventData } from "tns-core-modules/ui/list-view";
import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Router } from "@angular/router";
import * as app from "tns-core-modules/application";
import { TaskService } from "../shared/task/task.service";
import { Task, TaskPriority } from "../shared/task/task.model";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    tasks: Array<Task> = [
        { id: "id", title: "Walk the dog", description: "walk", priority: TaskPriority.LOW, date: "today" },
        { id: "id", title: "Workout", description: "workout fast", priority: TaskPriority.LOW, date: "tomorrow" }
    ];

    constructor(private router: Router, private taskService: TaskService) {
        // Use the component constructor to inject providers.
    }

    onItemTap(args: ItemEventData): void {
        const task = this.tasks[args.index];
        this.taskService.set(task);
        this.router.navigate(["/item-details"]);
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
