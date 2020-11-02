import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {selectTodoItems} from '../selectors/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  constructor(private readonly store: Store) { }

  list$ = this.store.select(selectTodoItems);
}
