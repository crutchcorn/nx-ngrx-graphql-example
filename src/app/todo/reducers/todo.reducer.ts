import { Action, createReducer, on } from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';

export const todoFeatureKey = 'todo';

interface TodoItem {
  name: string;
  id: string;
}

export interface State {
  items: TodoItem[];
}

export const initialState: State = {
  items: []
};

export const reducer = createReducer(
  initialState,

  on(TodoActions.loadTodos, state => state),
);
