import axios from "axios";

//action types
export const GET_ALL_RECIPE = 'GET_ALL_RECIPE';
export const RESET_ALL_RECIPE = 'RESET_ALL_RECIPE';

//action methods
export const getAllRecipe = (url = '/api/v1/get-recipes') => dispatch => {
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

export const resetAllRecipe = () => dispatch => dispatch({
    type: RESET_ALL_RECIPE
})