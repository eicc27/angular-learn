import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  @Output()
  onAddIngredient = new EventEmitter<Ingredient>();

  @ViewChild('nameInput')
  public name!: ElementRef<HTMLInputElement>;

  @ViewChild('amountInput')
  public amount!: ElementRef<HTMLInputElement>;

  public addIngredient() {
    this.onAddIngredient.emit(
      new Ingredient(
        this.name.nativeElement.value,
        this.amount.nativeElement.valueAsNumber
      )
    );
  }
}
