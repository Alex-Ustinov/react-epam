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
                items: state.items.map(el => el.id == action.obj.id ? action.obj :  el )
            }
        case ADD_ITEM:
            action.obj.id = state.items.length + 1
            return {
                ...state,
                items: [...state.items, action.obj]
            }
        case SEARCH_ITEM:
            return {
                ...state, 
                items: state.items.map(el => el.categoryId === action.obj.activeCategory && el.name.includes(action.obj.enterValue) 
                    ? {...el, show: true} 
                    : {...el, show: false}
                )
            }
        case SEARCH_ISDONE_ITEM: 
        console.log(action)
            return {
                ...state,
                isDoneSearch: action.stateSearch, 
                /*
                items: state.items.filter(el => el.categoryId === action.idCategory).map(elm => {
                    if ((!elm.isDone) && (!action.stateSearch)) {
                       return {...elm, show: true}
                    } else if ((!elm.isDone) && (action.stateSearch)) {
                        return {...elm, show: false}
                    } else {
                        return {...elm, show: true}
                    } 
                })
                */
            }
        default:
            return state;
    }
}

export default itemReducer;