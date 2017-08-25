import { UPDATE_RECIPE_NAME } from '../constants';

export function recipeReducers(state = {
    recipeName: '',
    recipes: []
  }, action) {
  switch (action.type) {
    case UPDATE_RECIPE_NAME:
      const recipeName = action.payload;
      return {
        recipeName: recipeName
      }
      break;

    case 'UPDATE_RECIPES':
      return {
        recipes: action.payload
      }
      break;
    default:
  }
  return state;
}
