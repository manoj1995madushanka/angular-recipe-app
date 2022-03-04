import {EventEmitter, Injectable, OnDestroy} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {Subject, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  //ingredientChanged = new EventEmitter<Ingredient[]>();
  ingredientChanged = new Subject<Ingredient[]>();

  private ingredients : Ingredient[]= [
    new Ingredient('apple',3),
    new Ingredient('grapes',2),
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredients(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    //this.ingredientChanged.emit(this.ingredients.slice());

    // write above code using subject
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addAllIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    //this.ingredientChanged.emit(this.ingredients.slice());

    this.ingredientChanged.next(this.ingredients.slice());
  }
}
