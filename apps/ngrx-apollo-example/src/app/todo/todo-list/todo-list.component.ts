import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectTodoItems} from '../selectors/todo.selectors';
import {addTodo} from '../actions/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  constructor(private readonly store: Store) {
  }

  id = 0;

  list$ = this.store.select(selectTodoItems);

  addItem(): void {
    this.store.dispatch(addTodo({
      item: {
        id: `${this.id++}`,
        title: 'Testing 123'
      }
    }));
  }
}
