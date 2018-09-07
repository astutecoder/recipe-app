import {GET_ALL_RECIPE, RESET_ALL_RECIPE} from "../actions/recipe.actions";

const defaultRecipeState = {
    items: [],
    url: {}
}
export const recipeReducer = (state = defaultRecipeState, action) =>{
    switch (action.type){
        case GET_ALL_RECIPE:
            return {
                ...state,
                items: action.payload.data,
                url: {
                    next: action.payload.next_page_url,
                    prev: action.payload.prev_page_url,
                    first: action.payload.first_page_url,
                    last: action.payload.last_page_url,
                    current_page: action.payload.current_page,
                    last_page: action.payload.last_page,
                    per_page: action.payload.per_page
                }
            }
            break;
        case RESET_ALL_RECIPE:
            return defaultRecipeState;
            break;
        default:
            return state;
            break;
    }
}