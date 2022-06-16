import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Poutine',
      'Amazing poutine',
      'https://media.blogto.com/articles/97f2-20150127-chrisjerk590-04.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70'
    ),
    new Recipe(
      'Poutine again!',
      'Amazing poutine',
      'https://media.blogto.com/articles/97f2-20150127-chrisjerk590-04.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
