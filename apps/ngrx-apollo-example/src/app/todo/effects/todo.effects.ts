import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {concatMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

import * as TodoActions from '../actions/todo.actions';

@Injectable()
export class TodoEffects {
  // loadTodos$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(TodoActions.loadTodos),
  //     /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //     concatMap(() => EMPTY)
  //   );
  // });

  constructor(private actions$: Actions) {
  }
}
