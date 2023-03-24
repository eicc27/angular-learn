import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService],
})
export class RecipesComponent {
  public recipeDetail!: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipeDetail = recipe;
      }
    );
  }

  public showRecipeDetail(recipe: Recipe) {
    this.recipeDetail = recipe;
  }

  public selectRecipe(recipe: Recipe) {
    this.recipeDetail = recipe;
  }
}
