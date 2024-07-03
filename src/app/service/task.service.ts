import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl="https://localhost:44373/api/tasks"

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  getTask(id: number):Observable<Task>{
    return this.http.get<Task>(`${this.apiUrl}/${id}`); 
  }

  //add task}
  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task);
  }

  //update Task
  updateTask(task:Task): Observable<any>{
    return this.http.put(`${this.apiUrl}/${task.taskId}`,task)
  }

  // delete task
  deleteTask(id:number):Observable<void>
  {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
