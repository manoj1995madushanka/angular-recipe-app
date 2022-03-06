import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

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
  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice(); // return duplicate list of recipes
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addAllIngredients(ingredients);
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice())
  }
}
