import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input('title') public title: string = 'Go to market';
  
  constructor() { }

  ngOnInit(): void {
  }

  public clickHandler(e: Event): void {
    e.preventDefault();
  }

}
