import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskTableComponent } from './task-table/task-table.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'tasks', component: TaskTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
