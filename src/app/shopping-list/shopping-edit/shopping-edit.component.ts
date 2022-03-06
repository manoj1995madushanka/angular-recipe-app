import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // commented view child because we move to template driven form approach
  /*@ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;*/


  //@Output() ingredientAdded = new EventEmitter<Ingredient>();

  // added below 3 lines for listen when edit shopping item clicked
  shoppingSubscription: Subscription;
  editMode = false;
  editedNumberIndex: number;
  editingIngredient: Ingredient;

  @ViewChild('shpForm', {static: false}) shpForm: NgForm;

  constructor(private shoppingLisService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.shoppingSubscription = this.shoppingLisService.startedEditing.subscribe((index: number) => {
      this.editedNumberIndex = index;
      this.editMode = true;
      this.editingIngredient = this.shoppingLisService.getIngredientByIndex(index);
      // setting values to form
      this.shpForm.setValue({
        name: this.editingIngredient.name,
        amount: this.editingIngredient.amount
      });
    });
  }

  onSubmit(shpForm: NgForm) {

    // do not need below lines because we using template driven now
    /*const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;*/

    const data = shpForm.value;
    const ingredient = new Ingredient(data.name, data.amount);

    //this.ingredientAdded.emit(ingredient);

    if (this.editMode) {
      this.shoppingLisService.updateIngredient(this.editedNumberIndex, ingredient);
    } else {
      this.shoppingLisService.addIngredients(ingredient);
    }
    shpForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.shoppingSubscription.unsubscribe();
  }

  onClear() {
    this.shpForm.reset();
    this.editMode = false;
  }
}
