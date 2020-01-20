import { SAVE_ITEM, ADD_ITEM, SEARCH_ITEM, SEARCH_ISDONE_ITEM } from '../constants';

const initialState = {
    items: [
        {
            id: 1,
            name: 'Item1',
            isDone: true,
            categoryId: 1,
            show: true
        },
        {
            id: 2,
            name: 'Item2',
            isDone: false,
            categoryId: 2,
            show: true
        },
    ],
    isDoneSearch: false
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ITEM:
            return {
                ...state,
                items: state.items.map(el => el.id === action.obj.id ? action.obj :  el )
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, {...action.obj, id: state.items.length + 1}]
            }
        case SEARCH_ITEM:
            return {
                ...state, 
                items: state.items.map(el => ({
                    ...el, 
                    show: el.categoryId === action.obj.activeCategory && el.name.includes(action.obj.enterValue)
                }))
            }
        case SEARCH_ISDONE_ITEM: 
            return {
                ...state,
                isDoneSearch: !action.stateSearch, 
            }
        default:
            return state;
    }
}

export default itemReducer;