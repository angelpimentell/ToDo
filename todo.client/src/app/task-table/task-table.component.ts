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

  
}
