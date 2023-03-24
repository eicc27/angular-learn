import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated // none: style applies globally
  // emulated: style applies only to this component, by adding unique class name for this component
  // shadowDom: uses shadow dom technology, generally working as default.
})
export class RecipeItemComponent {
  // allow binding from outside
  @Input('recipe') // @input(alias)
  // ! is an assertion of not null and not undefined
  public recipe!: Recipe;

  constructor(private recipeService: RecipeService) {}

  public showDetail() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
