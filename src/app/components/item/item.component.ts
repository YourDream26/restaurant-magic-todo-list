import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/state/todo.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() public todo: Todo = {
    id: 0,
    title: '',
    completed: false
  };

  @Output()
  public changeStatus: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {}

  public clickHandler(e: Event): void {
    e.preventDefault();
    const updatedObject: Todo = {...this.todo};
    updatedObject.completed = !updatedObject.completed;
    this.changeStatus.emit(updatedObject);
  }

}
