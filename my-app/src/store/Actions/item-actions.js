import { SAVE_ITEM, ADD_ITEM, SEARCH_ITEM, SEARCH_ISDONE_ITEM } from '../constants';

export const saveItemCreater = obj => ({
    type: SAVE_ITEM,
    obj
});
export const addItemCreater = obj => ({
    type: ADD_ITEM,
    obj
});
export const searchItemCreater = obj => ({
    type: SEARCH_ITEM,
    obj
});
export const searchIsDoneItemCreater = stateSearch => ({
    type: SEARCH_ISDONE_ITEM,
    stateSearch
});
