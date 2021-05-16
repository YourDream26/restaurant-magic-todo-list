import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/state/todo.model';
import { TodosService } from 'src/app/state/todo.service';

import { SessionQuery } from '../../state/todo.query';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  public completedTodos$: Observable<Array<Todo>> = this.session.completedTodos$();
  public incompletedTodos$: Observable<Array<Todo>> = this.session.incompletedTodos$();

  constructor(private session: SessionQuery, private service: TodosService) { }

  public ngOnInit(): void {}

  public handleChangeItem(item: Todo): void {
    this.service.change(item);
  }

}
