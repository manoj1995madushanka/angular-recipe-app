import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/Ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[]= [
    new Ingredient('apple',3),
    new Ingredient('grapes',2),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
