import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../model/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks : Task[]=[];

  constructor(private taskService:TaskService){}

  ngOnInit(): void {
    // debugger
    this.taskService.getTasks().subscribe(data=>{
      // console.log(data)
      this.tasks = data;
      console.log(this.tasks)
    })  
    // throw new Error('Method not implemented.');  
  }


}
