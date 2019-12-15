import { SAVE_ITEM } from '../constants';

let initialState = {
    items: [
        {
            id: 1,
            name: 'Item1',
            isDone: true,
            categoryId: 1
        },
        {
            id: 2,
            name: 'Item2',
            isDone: false,
            categoryId: 2
        },
    ],
}

const itemReduser = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ITEM:
            return {
                ...state,
                items: state.items.map( el => {
                    if (el.id == action.obj.id) {
                        return action.obj
                    }
                    return el
                })
            }
        default:
            return state;
    }
}

export default itemReduser