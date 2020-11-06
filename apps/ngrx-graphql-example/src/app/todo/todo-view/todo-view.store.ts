import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface TodoViewState {
  description: string;
  creatorName: string;
}

@Injectable()
export class TodoViewStore extends ComponentStore<TodoViewState> {
  constructor() {
    // set defaults
    super({
      description: '',
      creatorName: ''
    });
  }
  // *********** Updaters *********** //

  readonly setDescription = this.updater((state, value: string) => ({
    ...state,
    description: value,
  }));

  readonly setCreatorName = this.updater((state, value: string) => ({
    ...state,
    creatorName: value,
  }));

  // *********** Selectors *********** //

  // readonly hasPreviousPage$ = this.select(
  //   ({ pageIndex, pageSize }) => pageIndex >= 1 && pageSize != 0
  // );

  // ViewModel of Paginator component
  readonly vm$ = this.select(
    this.state$,
    (state) => ({
      ...state
    })
  );
}
