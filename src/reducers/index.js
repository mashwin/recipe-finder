import { combineReducers } from 'redux';
import { recipeReducers } from './recipeReducers';

export default combineReducers({
  recipe: recipeReducers,
});
