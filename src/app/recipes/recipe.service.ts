import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is simply a test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg',
      [new Ingredient('Meat', 3), new Ingredient('Banana', 4)]
    ),
    new Recipe(
      'Another Recipe',
      'This is simply a test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg',
      [new Ingredient('Bread', 2), new Ingredient('Meat', 4)]
    ),
  ];
  getRecipe(index: number) {
    return this.recipes[index];
  }
  getRecipes() {
    return this.recipes.slice();
  }
}
