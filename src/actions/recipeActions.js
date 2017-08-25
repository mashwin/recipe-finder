import { UPDATE_RECIPE_NAME } from '../constants';

export function updateRecipeName(recipeName) {
  return {
    'type': UPDATE_RECIPE_NAME,
    'payload': recipeName
  }
}

export function updateRecipes(recipes) {
  return {
    'type': 'UPDATE_RECIPES',
    'payload': recipes
  }
}
