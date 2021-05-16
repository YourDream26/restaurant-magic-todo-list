import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Todo } from './todo.model';

export interface TodosState extends EntityState<Todo> {
  todos: Array<Todo>;
}

function createInitialState(): TodosState {
  return {} as TodosState;
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'todos'
})
export class TodosStore extends EntityStore<TodosState> {
  constructor() {
    super(createInitialState());
  }
}
