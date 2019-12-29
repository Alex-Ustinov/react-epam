import { SAVE_ITEM, ADD_ITEM, SEARCH_ITEM } from '../constants';

export const saveItemCreater = obj => ({
    type: SAVE_ITEM,
    obj: obj
});
export const addItemCreater = obj => ({
    type: ADD_ITEM,
    obj: obj
});
export const searchItemCreater = obj => ({
    type: SEARCH_ITEM,
    obj: obj
});
