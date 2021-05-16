import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/state/todo.model';

@Component({
  selector: 'app-incompleted',
  templateUrl: './incompleted.component.html',
  styleUrls: ['./incompleted.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncompletedComponent implements OnInit, OnChanges {

  public title = 'Incompleted Tasks';

  @Input() public todoList: Array<Todo> = [];

  @Output()
  public changeItem: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {}
  public ngOnChanges(): void {}

  public handleChangeStatus(todo: Todo): void {
    this.changeItem.emit(todo);
  }

}
