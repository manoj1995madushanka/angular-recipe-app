import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Test Recipe 01', 'for test purpose 01',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg', [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 10)
      ]),
    new Recipe('Test Recipe 02', 'for test purpose 02',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg', [
        new Ingredient('Cheese', 2)
      ])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice(); // return duplicate list of recipes
  }
}
