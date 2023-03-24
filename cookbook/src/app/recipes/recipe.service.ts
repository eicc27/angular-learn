import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'A test recipe',
      'https://tse1-mm.cn.bing.net/th/id/OIP-C.hzLkZhC8VDj82ovZgv11owHaHa?pid=ImgDet&rs=1',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
  ];

  public constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); //copy of the array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
