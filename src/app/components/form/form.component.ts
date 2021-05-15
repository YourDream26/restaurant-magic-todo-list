import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public pageTitle = 'Add Form';
  public placeholderTitle = 'Task Name';
  public buttonTitle = 'Add';

  constructor() { }

  ngOnInit(): void {
  }

}
