import { Component, OnInit } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskService } from '../../service/task.service';
import { Task } from '../../model/Task';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.css',
})
export class TaskManagerComponent implements OnInit {
  tasks: Task[] = [];
  task: Task = this.initializeTask();
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }
  loadTasks() {
    // throw new Error('Method not implemented.');
    alert('loading tasks');
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  initializeTask(): Task {
    // alert('initalizing tasks')
    return {
      title: '',
      description: '',
      status: 'Pending',
      createdDate: new Date(),
    };
  }

  // onSubmit(): void {
  //   alert('form Submitted');
  // }

  // addTask() {
  //   alert('adding Task');
  //   this.taskService.addTask(this.task).subscribe((newTask) => {
  //     this.loadTasks();
  //     this.task = this.initializeTask();
  //   });
  // }
  // editTask() {
  //   if (this.task.taskId) {
  //     alert('editing Task');
  //     this.taskService.updateTask(this.task).subscribe((newTask) => {
  //       this.tasks.push(newTask);
  //       this.task = this.initializeTask();
  //     });
  //   }
  // }

  onSubmit(): void {
    if (this.task.taskId) {
      this.taskService.updateTask(this.task).subscribe(() => {
        this.loadTasks();
        this.task = this.initializeTask();
      });
    } else {
      this.taskService.addTask(this.task).subscribe(newTask => {
        this.tasks.push(newTask);
        this.task = this.initializeTask();
      });
    }
  }

  deleteTask(taskId?:number) {
    debugger
    if(taskId !== undefined)
      {

        alert('deleting tasks');
        //delete task
        this.taskService.deleteTask(taskId).subscribe(()=>{
          console.log(taskId,this.tasks)
          this.tasks= this.tasks.filter(t=>t.taskId !==taskId)
        })
      }

  }

  editTask(task:Task){
    this.task={...task}
  }
}
