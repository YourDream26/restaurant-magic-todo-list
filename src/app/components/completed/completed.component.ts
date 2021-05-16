import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/state/todo.model';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompletedComponent implements OnInit, OnChanges {

  public title = 'Completed Tasks';

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
