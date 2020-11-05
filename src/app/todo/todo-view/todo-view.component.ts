import { Component } from '@angular/core';
import {selectTodoItemById} from '../selectors/todo.selectors';
import {Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {TodoViewStore} from './todo-view.store';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss'],
  providers: [TodoViewStore],
})
export class TodoViewComponent {
  constructor(private readonly store: Store, private route: ActivatedRoute, private readonly todoViewStore: TodoViewStore) { }

  todo$ =
    this.route.params
      .pipe(switchMap(params => this.store.select(selectTodoItemById, {id: params.ticketId})));

  readonly vm$ = this.todoViewStore.vm$;

  setDescription(val: string): void {
    this.todoViewStore.setDescription(val);
  }
}
