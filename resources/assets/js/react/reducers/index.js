import {combineReducers} from "redux";
import {recipeReducer} from "./recipe.reducers";

export default combineReducers({
    recipes: recipeReducer
})