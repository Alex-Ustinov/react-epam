import {UPDATE_NEW_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY, SAVE_ITEM, CHANGE_CATEGORY} from './Constants'

export const addCategoryCreator = (parentId) => {
    return {type: ADD_CATEGORY, parentId: parentId}
}
export const updateCategoriesCreater = (text) =>{
    return {type: UPDATE_NEW_CATEGORY, body: text}
}
export const deleteCategoriesCreater = (id) =>{
    return {type: DELETE_CATEGORY, id: id}
}
export const saveItemCreater = (obj) =>{
    return {type: SAVE_ITEM, obj: obj}
}
export const changeCategoryCreater = (id) =>{
    return {type: CHANGE_CATEGORY, id: id}
}