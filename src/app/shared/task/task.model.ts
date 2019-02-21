export class Task {

    id: string;
    title: string;
    description: string;
    priority: TaskPriority;
    date: string;

}

export enum TaskPriority {
    HIGH, MEDIUM, LOW
}