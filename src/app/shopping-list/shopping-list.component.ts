import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: []
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];

  constructor() { }

  ngOnInit() {
  }

}
