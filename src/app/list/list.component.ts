import { Component } from '@angular/core';
import { Task } from '../tasks';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from '../task-service.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

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

  delete(tasks: Task) {
    const confirmar = confirm(`Tem certeza que deseja excluir a tarefa "${tasks.titulo}"?`);
    if (confirmar) {
      this.TaskService.delete(tasks).subscribe({
        next: () => this.loadTasks()
    });
  }
  }

  onClickUpdate(tasks: Task) {
    this.isEditing = true;
    this.formGroupTasks.setValue(tasks);
  }

  update() {
      this.TaskService.update(this.formGroupTasks.value).subscribe(
        {
          next: () => {
            this.loadTasks();
            this.clear();
          }
        }
      )
  }

  clear() {
    this.isEditing = false;
    this.formGroupTasks.reset();
  }
}


