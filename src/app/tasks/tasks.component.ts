import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from '../task-service.service';
import { Prioridade } from '../prioridade';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{

  prioridade : Prioridade [] = [
    {id:0, name: ""},
    {id:1, name: "Baixa"},
    {id:2, name: "Média"},
    {id:3, name: "Alta"}
  ];
  
  tasks: Task[] = [];
  formGroupTasks: FormGroup;
  isEditing: boolean = false;

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

  ngOnInit(): void {
    this.loadTasks();
  } 

  loadTasks(){
    this.TaskService.getAll().subscribe({
      next: (json) => { this.tasks = json; }
      }
    )
  }

  save() {
    this.TaskService.save(this.formGroupTasks.value).subscribe(
      {
        next: json => {
          this.tasks.push(json);
          this.formGroupTasks.reset();
        }
      }
    )
  }

  clear() {
    this.isEditing = false;
    this.formGroupTasks.reset();
  }
}
