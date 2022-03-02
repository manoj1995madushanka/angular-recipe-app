import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./Recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes : Recipe[] = [
    new Recipe('Test Recipe 01','for test purpose 01','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('Test Recipe 02','for test purpose 02','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes(){
    return this.recipes.slice(); // return duplicate list of recipes
  }
}
