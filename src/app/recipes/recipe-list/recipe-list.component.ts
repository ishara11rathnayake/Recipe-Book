import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Chicken Potpie', 'This is test recipe', 'https://images.media-allrecipes.com/userphotos/960x960/3758842.jpg'),
    new Recipe('Chicken Potpie', 'This is test recipe', 'https://images.media-allrecipes.com/userphotos/960x960/3758842.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
