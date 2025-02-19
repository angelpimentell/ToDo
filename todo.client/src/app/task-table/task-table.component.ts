import { Component } from '@angular/core';

@Component({
  selector: 'app-task-table',
  standalone: false,
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.css'
})
export class TaskTableComponent {
  tasks = [
    { id: 1, name: 'Task 1', status: 'Pending' },
    { id: 2, name: 'Task 2', status: 'Completed' },
    { id: 3, name: 'Task 3', status: 'In Progress' }
  ];
}
