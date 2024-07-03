import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './component/task-list/task-list.component';
import { TaskManagerComponent } from './component/task-manager/task-manager.component';
export const routes: Routes = 
[{path:"tasks",component:TaskListComponent},
 {path:"taskmgr",component:TaskManagerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
