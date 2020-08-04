import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
// import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Test Recipe',
  //     'This is simply a test',
  //     'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg',
  //     [new Ingredient('Meat', 3), new Ingredient('Banana', 4)]
  //   ),
  //   new Recipe(
  //     'Another Recipe',
  //     'This is simply a test',
  //     'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg',
  //     [new Ingredient('Bread', 2), new Ingredient('Meat', 4)]
  //   ),
  // ];

  private recipes: Recipe[] = [];
  constructor(private store: Store<fromApp.AppState>) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  getRecipes() {
    return this.recipes.slice();
  }

  // addIngredientsToShoppingList(ingredients: Ingredient[]) {
  //   // this.slService.addIngredients(ingredients);
  //   this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  // }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
