import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Poutine',
      'Amazing poutine',
      'https://media.blogto.com/articles/97f2-20150127-chrisjerk590-04.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Beef', 1),
        new Ingredient('Cheese', 3),
      ]
    ),
    new Recipe(
      'Poutine again!',
      'Amazing poutine',
      'https://media.blogto.com/articles/97f2-20150127-chrisjerk590-04.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Beef', 1),
        new Ingredient('Cheese', 3),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
