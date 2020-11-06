import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectTodoItems} from '../selectors/todo.selectors';
import {addTodo} from '../actions/todo.actions';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  constructor(private readonly store: Store, private apollo: Apollo) {
  }

  id = 0;

  list$ = this.store.select(selectTodoItems);

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
             allTodos {
              title
              id
            }
          }
        `,
      })
      .valueChanges.subscribe(result => {
      console.log(result);
    });
  }

  addItem(): void {
    this.store.dispatch(addTodo({
      item: {
        id: `${this.id++}`,
        title: 'Testing 123'
      }
    }));
  }
}
