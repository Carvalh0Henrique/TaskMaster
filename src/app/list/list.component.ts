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
    this.loadStudents();
  } 

  loadStudents(){
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

  delete(tasks: Task) {
    this.TaskService.delete(tasks).subscribe(
      {
        next:() => this.loadStudents()      
      }
    )
  }

  onClickUpdate(tasks: Task) {
    this.isEditing = true;
    this.formGroupTasks.setValue(tasks);
  }

  update() {
      this.TaskService.update(this.formGroupTasks.value).subscribe(
        {
          next: () => {
            this.loadStudents();
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


