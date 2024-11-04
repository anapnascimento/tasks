import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../../Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";
import { TaskAddComponent } from "../task-add/task-add.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, TaskAddComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  list_tasks: Task[] = [];

  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.list_tasks = data;
      console.log(data);
    });
  }
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => (this.list_tasks = this.list_tasks.filter((t) => t.id != task.id)));
  }
  toggleCompleted(task: Task){
    task.completion = !task.completion;
    this.taskService.updateTask(task).subscribe();
  }
}
