import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  public recipeDetail!: Recipe;

  public showRecipeDetail(recipe: Recipe) {
    this.recipeDetail = recipe;
  }

  public selectRecipe(recipe: Recipe) {
    this.recipeDetail = recipe;
  }
}
