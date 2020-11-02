import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { TodoActionTypes, TodoActions } from '../actions/todo.actions';



@Injectable()
export class TodoEffects {


  @Effect()
  loadTodos$ = this.actions$.pipe(
    ofType(TodoActionTypes.LoadTodos),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<TodoActions>) {}

}
