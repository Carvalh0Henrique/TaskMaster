import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './tasks';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl = "http://localhost:3000/tasksJson"

  constructor(private http:HttpClient) { }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  save(tasks: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, tasks);
  }

  delete(tasks:Task): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${tasks.id}`)
  }

  update(tasks:Task): Observable<Task>{
    return this.http.put<Task>(`${this.apiUrl}/${tasks.id}`, tasks)
  }
}
