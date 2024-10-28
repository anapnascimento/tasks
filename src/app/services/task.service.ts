import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private urlApi = 'http://localhost:3000/tasks'

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.urlApi);
  }

  deleteTask(task: Task): Observable<Task>{
    return this.http.delete<Task>(`${this.urlApi}/${task.id}`);
  }

  updateTask(task: Task): Observable<Task>{
    return this.http.put<Task>(`${this.urlApi}/${task.id}`, task);
  }
}
