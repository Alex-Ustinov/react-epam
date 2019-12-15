import { UPDATE_NEW_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY, CHANGE_CATEGORY, CREATE_MAIN_CATEGORY, SHOW_SUB_CATEGORIES } from '../constants';

export const addCategoryCreator = (nameCategory, parentId) => ({type: ADD_CATEGORY, name: nameCategory, parentId: parentId});
export const updateCategoriesCreater = text => ({type: UPDATE_NEW_CATEGORY, body: text});
export const deleteCategoriesCreater = id => ({type: DELETE_CATEGORY, id: id});
export const changeCategoryCreater = id => ({type: CHANGE_CATEGORY, id: id});
export const actualSubCategoriesCreater = id => ({type: SHOW_SUB_CATEGORIES, id: id});

export const appendMainCategoryCreater = name => ({type: CREATE_MAIN_CATEGORY, name: name});