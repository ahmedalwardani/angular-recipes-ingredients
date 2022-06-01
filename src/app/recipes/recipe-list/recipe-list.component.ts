import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Poutine',
      'Amazing poutine',
      'https://media.blogto.com/articles/97f2-20150127-chrisjerk590-04.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70'
    ),
    new Recipe(
      'Poutine',
      'Amazing poutine',
      'https://media.blogto.com/articles/97f2-20150127-chrisjerk590-04.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
