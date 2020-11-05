import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoViewComponent} from './todo-view/todo-view.component';

const routes: Routes = [{
  path: '',
  component: TodoComponent,
  children: [
    {
      path: '',
      component: TodoListComponent
    },
    {
      path: ':ticketId',
      component: TodoViewComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
