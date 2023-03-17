import { Component, ElementRef, Output, ViewChild, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  public recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'A test recipe',
      'https://tse1-mm.cn.bing.net/th/id/OIP-C.hzLkZhC8VDj82ovZgv11owHaHa?pid=ImgDet&rs=1'
    ),
  ];

  @Output()
  recipeSelected = new EventEmitter<Recipe>();

  public addNewRecipe() {
    this.recipes.push(
      new Recipe(
        'Test Recipe',
        'A test recipe',
        'https://tse1-mm.cn.bing.net/th/id/OIP-C.hzLkZhC8VDj82ovZgv11owHaHa?pid=ImgDet&rs=1'
      )
    );
  }

  public onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
