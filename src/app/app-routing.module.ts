import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent},
  { path: 'list'  , component: ListComponent},
  { path: ''        , component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
