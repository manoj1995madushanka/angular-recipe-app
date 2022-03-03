import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  /*ingredients : Ingredient[]= [
    new Ingredient('apple',3),
    new Ingredient('grapes',2),
  ];*/

  ingredients : Ingredient[]

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    // refresh ingredient list when new ingredient added
    this.shoppingListService.ingredientChanged.subscribe((ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    });
  }

  /*onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }*/
}
