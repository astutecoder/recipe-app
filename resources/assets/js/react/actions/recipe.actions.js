import axios from "axios";

//action types
export const GET_ALL_RECIPE = 'GET_ALL_RECIPE';
export const RESET_ALL_RECIPE = 'RESET_ALL_RECIPE';
export const FILTER_RECIPE_PAGINATION = 'FILTER_RECIPE_PAGINATION';

//internal const
export const BaseURL = '/';
// export const BaseURL = '/projects/food-recipe/';

//action methods
export const getAllRecipe = (url = BaseURL+'api/v1/get-recipes') => dispatch => {
    axios.get(url,{
        'headers':{
            'Authorization': 'Bearer 0mXTxjf6BkzZ5FIj7qbvW9SOBIeJY1tr1WZyBttEoKuzmTlRvA6jiXWERT4Z'
        }
    })
        .then(response => {
            return (dispatch({
                type: GET_ALL_RECIPE,
                payload: response.data
            })
        )})
        .catch(error => console.error(error))
}

export const filterRecipePagination = (perpage = 5, page = 1, data = []) => dispatch => {
    const
    recipes = data.map(item => item),
    index = (perpage * (page-1)),
    recipesToShow = recipes.splice(index, perpage);
    
    return dispatch({
        type: FILTER_RECIPE_PAGINATION,
        payload: recipesToShow
    })
}

export const resetAllRecipe = () => dispatch => dispatch({
    type: RESET_ALL_RECIPE
})