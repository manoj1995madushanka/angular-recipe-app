import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../Recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Test Recipe','for test purpose','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('Test Recipe','for test purpose','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];

  @Output() recipeWasSelected=new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }


  onRecipeSelected(recipeElement: Recipe) {
    this.recipeWasSelected.emit(recipeElement);
  }
}
