export const  filterRecipePagination = (perpage = 5, page = 1, data = []) => {
    if(page < 0) page = 0;
    const
    recipes = data.map(item => item),
    index = (perpage * (page-1)),
    recipesToShow = recipes.splice(index, perpage);
    return recipesToShow;
}

export const findRecipeById = (id, data=[]) => {
    return data.filter(item => id===item.id);
}

export const excerpt = (data = [], limit = 200) => {
    if (data.length > limit){
        // let excerptText = '';
        let excerptText = data.split('', limit).join("");

        return (excerptText + " .....");
    }
    return data;
}