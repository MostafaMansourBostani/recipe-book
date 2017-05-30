import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', '/assets/images/591be340bae36.jpg'),
    new Recipe('Summer Salad', 'Okayish', '/assets/images/591be16625ff2.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
