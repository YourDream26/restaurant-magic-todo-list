import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SessionQuery } from 'src/app/state/todo.query';

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

  private subscription: Subscription | undefined;

  public existingList: Array<string> = [];

  public form: FormGroup = new FormGroup({
    title: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern(/([a-zA-Z0-9])(a-zA-Z0-9)*/)
      ]
    })
  })

  constructor(private service: TodosService, private store: SessionQuery) { }

  public ngOnInit(): void {
    this.subscription = this.store.existingTitlesList$().subscribe(titles => {
      this.existingList = titles;
    });
  }

  public submitHandler(): void {
    if (this.form.valid) {
      const value = this.form.value.title.trim();
      if (~this.existingList.indexOf(value)) {
        alert('Task with this name already Exists!');
      } else {
        this.service.add(value);
        this.form.reset();
      }
    } else {
      alert('Task name cannot be empty or contain special characters!');
    }
  }

  public ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}
