import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { TodosService } from '../../state/todo.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  public pageTitle = 'Add Form';
  public placeholderTitle = 'Task Name';
  public buttonTitle = 'Add';

  constructor(private service: TodosService) { }

  public ngOnInit(): void {}

  public submitHandler(event: Event): void {
    event.preventDefault();
    this.service.add('New Task');
  }
}
