import { SAVE_ITEM, ADD_ITEM, SEARCH_ITEM } from '../constants';

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
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ITEM:
            return {
                ...state,
                items: state.items.map( el => el.id == action.obj.id ? action.obj :  el )
            }
        case ADD_ITEM:
            let newId = 0
            for (let p = 0; p < initialState.items.length; p += 1) {
                if ( newId < initialState.items[p].id ) {
                    newId = Number(initialState.items[p].id) + 1
                }
            }
            action.obj.id = newId
            return {
                ...state,
                items: [...state.items, action.obj]
            }
        case SEARCH_ITEM:
            return {
                ...state, 
                items: state.items.map( el => el.categoryId === action.obj.activeCategory && el.name.includes(action.obj.enterValue) ? {...el, show: true} : {...el, show: false} )
            }
        default:
            return state;
    }
}

export default itemReducer;