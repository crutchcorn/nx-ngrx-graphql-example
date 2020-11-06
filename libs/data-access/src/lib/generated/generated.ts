import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todos;
};


export type MutationCreateTodoArgs = {
  todo: TodoInput;
};

export type Query = {
  __typename?: 'Query';
  allTodos: Array<Todos>;
  getTodo: Todos;
};


export type QueryGetTodoArgs = {
  id: Scalars['String'];
};

export type TodoInput = {
  creatorName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Todos = {
  __typename?: 'Todos';
  creatorName: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type TodoFieldsFragment = (
  { __typename?: 'Todos' }
  & Pick<Todos, 'id' | 'title' | 'description' | 'creatorName'>
);

export type GetTodoListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodoListQuery = (
  { __typename?: 'Query' }
  & { allTodos: Array<(
    { __typename?: 'Todos' }
    & Pick<Todos, 'id' | 'title'>
  )> }
);

export type GetTodoByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetTodoByIdQuery = (
  { __typename?: 'Query' }
  & { getTodo: (
    { __typename?: 'Todos' }
    & TodoFieldsFragment
  ) }
);

export type AddSetMutationVariables = Exact<{
  todo: TodoInput;
}>;


export type AddSetMutation = (
  { __typename?: 'Mutation' }
  & { createTodo: (
    { __typename?: 'Todos' }
    & TodoFieldsFragment
  ) }
);

export const TodoFieldsFragmentDoc = gql`
    fragment TodoFields on Todos {
  id
  title
  description
  creatorName
}
    `;
export const GetTodoListDocument = gql`
    query getTodoList {
  allTodos {
    id
    title
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetTodoListGQL extends Apollo.Query<GetTodoListQuery, GetTodoListQueryVariables> {
    document = GetTodoListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetTodoByIdDocument = gql`
    query getTodoById($id: String!) {
  getTodo(id: $id) {
    ...TodoFields
  }
}
    ${TodoFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetTodoByIdGQL extends Apollo.Query<GetTodoByIdQuery, GetTodoByIdQueryVariables> {
    document = GetTodoByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddSetDocument = gql`
    mutation addSet($todo: TodoInput!) {
  createTodo(todo: $todo) {
    ...TodoFields
  }
}
    ${TodoFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AddSetGQL extends Apollo.Mutation<AddSetMutation, AddSetMutationVariables> {
    document = AddSetDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }