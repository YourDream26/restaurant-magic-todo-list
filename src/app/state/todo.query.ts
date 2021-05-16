import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
import { TodosState, TodosStore } from './todo.store';

@Injectable({
    providedIn: 'root'
})
export class SessionQuery extends QueryEntity<TodosState> {

    public todosList$ = this.selectAll();

    constructor(protected store: TodosStore) {
        super(store);
    }

    public completedTodos$ = (): Observable<Array<Todo>> =>
        this.todosList$.pipe(
                map((todos) => todos.filter((todo: Todo) => todo.completed === true)
            )
        )

    public incompletedTodos$ = (): Observable<Array<Todo>> =>
        this.todosList$.pipe(
                map((todos) => todos.filter((todo: Todo) => todo.completed === false)
            )
        )

    public existingTitlesList$ = (): Observable<Array<string>> =>
        this.todosList$.pipe(
            map((todos) => todos.map(todo => todo.title))
        )

}
