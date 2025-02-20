import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Task {
  id: number;
  name: string;
}

@Component({
  selector: 'app-task-table',
  standalone: false,
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.css'
})
export class TaskTableComponent implements OnInit {
  public tasks: Task[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.http.get<Task[]>('/api/tasks').subscribe(
      (result) => {
        this.tasks = result;
      },
      (error) => {
        console.error(error);
      }
    );

  }

  deleteTask(id: number) {
    this.http.delete(`/api/tasks/${id}`).subscribe(() => {
      this.getTasks();
    });
  }

  updateTask(task: Task) {
    console.log(task);
    this.http.put(`/api/tasks/${task.id}`, task).subscribe(
      () => {
        task.name = task.name;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  
}
