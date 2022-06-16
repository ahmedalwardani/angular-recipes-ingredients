import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Poutine',
      'Amazing poutine',
      'https://media.blogto.com/articles/97f2-20150127-chrisjerk590-04.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
      [
        new Ingredient('Gravy', 1),
        new Ingredient('Fries', 1),
        new Ingredient('Curd Cheese', 3),
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

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
