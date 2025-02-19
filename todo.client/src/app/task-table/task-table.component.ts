import { Component, OnInit } from '@angular/core';

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
  public tasks:Task[] =  [];

  ngOnInit() {
    this.tasks = [
      { id: 1, name: 'Task 1'},
      { id: 2, name: 'Task 2' },
      { id: 3, name: 'Task 3' }
    ];
  }

  
}
