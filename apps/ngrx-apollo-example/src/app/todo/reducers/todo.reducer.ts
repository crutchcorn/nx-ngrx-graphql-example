import {Action, createReducer, on} from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';
import {TodoItem} from '../model/todo.model';

export const todoFeatureKey = 'todo';

export interface State {
  items: TodoItem[];
}

export const initialState: State = {
  items: []
};

export const reducer = createReducer(
  initialState,

  on(TodoActions.addTodo, (state, action) => {
    return {
      ...state,
      items: [...state.items, action.item]
    };
  })
);
