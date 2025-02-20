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
  isAddingRow = true;
  newTask = { id: null, name: '' };

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
    this.http.put(`/api/tasks/${task.id}`, task).subscribe(
      () => {
        this.getTasks();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  createTask() {
    console.log(this.newTask);
    this.http.post('/api/tasks', this.newTask).subscribe(
      () => {
        this.getTasks();
        this.newTask.name = '';
        this.newTask.id = null;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  
}
