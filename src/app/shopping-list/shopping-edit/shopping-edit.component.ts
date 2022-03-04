import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // commented view child because we move to template driven form approach
  /*@ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;*/


  //@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingLisService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  onAddItem(form: NgForm) {

    // do not need below lines because we using template driven now
    /*const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;*/

    const data = form.value;
    const ingredient = new Ingredient(data.name, data.amount);
    //this.ingredientAdded.emit(ingredient);

    this.shoppingLisService.addIngredients(ingredient);
  }
}
