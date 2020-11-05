import { createAction, props } from '@ngrx/store';
import {TodoItem} from '../model/todo.model';

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{item: TodoItem}>()
);
