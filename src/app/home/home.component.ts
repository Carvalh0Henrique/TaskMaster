import { Component } from '@angular/core';
import { Task } from '../tasks';
import { TaskService } from '../task-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  tasks: Task[] = [];
  formGroupTasks: any;

  constructor(private TaskService: TaskService,
    private formBuilder: FormBuilder
  ) { 
  this.formGroupTasks = formBuilder.group({
    id : [''],
    titulo : [''],
    descricao : [''],
    prioridade : ['']
  });
  }

  ngOnInit(){
    this.TaskService.getAll().subscribe({
      next: (json) => { this.tasks = json; }
      }
    )
  }
}
