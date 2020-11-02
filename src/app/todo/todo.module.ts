import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './reducers/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './effects/todo.effects';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  declarations: [TodoComponent, TodoListComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects])
  ]
})
export class TodoModule { }
