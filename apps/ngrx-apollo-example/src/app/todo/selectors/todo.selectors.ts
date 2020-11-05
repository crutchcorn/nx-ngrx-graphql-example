import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodo from '../reducers/todo.reducer';

export const selectTodoState = createFeatureSelector<fromTodo.State>(
  fromTodo.todoFeatureKey
);

export const selectTodoItems = createSelector(
  selectTodoState,
  (state: fromTodo.State) => state.items
);

export const selectTodoItemById = createSelector(
  selectTodoItems,
  (items, props) => items.find(todoItem => todoItem.id === props.id)
);
