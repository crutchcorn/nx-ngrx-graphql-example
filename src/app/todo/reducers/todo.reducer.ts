import {TodoActions, TodoActionTypes} from '../actions/todo.actions';

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

export function reducer(state = initialState, action: TodoActions): State {
  switch (action.type) {

    case TodoActionTypes.LoadTodos:
      return state;

    default:
      return state;
  }
}
