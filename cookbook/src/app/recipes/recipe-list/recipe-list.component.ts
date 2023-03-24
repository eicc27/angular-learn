import {
  Component,
  ElementRef,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  public recipes!: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  public addNewRecipe() {
    this.recipes.push(
      new Recipe(
        'Test Recipe',
        'A test recipe',
        'https://tse1-mm.cn.bing.net/th/id/OIP-C.hzLkZhC8VDj82ovZgv11owHaHa?pid=ImgDet&rs=1',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Beef', 1),
          new Ingredient('Tomatoes', 1),
        ]
      )
    );
  }
}
