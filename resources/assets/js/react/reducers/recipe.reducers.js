import {GET_ALL_RECIPE, RESET_ALL_RECIPE, FILTER_RECIPE_PAGINATION, BaseURL} from "../actions/recipe.actions";

const defaultRecipeState = {
    items: [],
    filteredItem: [],
    baseURL: BaseURL
}
export const recipeReducer = (state = defaultRecipeState, action) =>{
    switch (action.type){
        case GET_ALL_RECIPE:
            return {
                ...state,
                items: action.payload
            }
            break;
        case FILTER_RECIPE_PAGINATION:
            return {
                ...state,
                filteredItem: action.payload
            };
            break;
        case RESET_ALL_RECIPE:
            return defaultRecipeState;
            break;
        default:
            return state;
            break;
    }
}