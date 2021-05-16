import { Injectable } from '@angular/core';
import { createTodo, Todo } from './todo.model';
import { TodosState, TodosStore } from './todo.store';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private todosStore: TodosStore) {}

  private generateId(): number {
      return Math.random(); // Let it be like that, very low chance to duplicate this value
  }

  public add(title: string): void {
    const todo = createTodo({ id: this.generateId(), title });
    this.todosStore.add(todo);
  }

  public change({ id, completed }: Todo): void {
      this.todosStore.update(id, {
          completed
      });
  }

  public getData(): TodosState {
      return this.todosStore.getValue();
  }

}
