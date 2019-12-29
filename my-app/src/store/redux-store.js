import { createStore, combineReducers } from 'redux';

import categoryReduser from './Reducers/category-reducer';
import itemReduser from './Reducers/item-reducer';

const reducers = combineReducers({
    categoriesData: categoryReduser,
    itemsData: itemReduser
});

export const store = createStore(reducers)
window.store = store