import { CREATE_MAIN_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY, CHANGE_CATEGORY, SHOW_SUB_CATEGORIES } from '../constants';

let initialState = {
    categories: [
        {
            id: 1,
            name: 'Category1',
            parentId: 0
        },
        {
            id: 2,
            name: 'Category2',
            parentId: 1
        },
    ],
    nameNewCategory: '',
    activeCategory: 0
}

const categoryReduser = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MAIN_CATEGORY:
            let newId = 0
            for(var p=0;p < initialState.categories.length;p++){
                if ( initialState.categories[p].parentId === 0 && newId < initialState.categories[p].id ) {
                    newId = Number(initialState.categories[p].id) + 1
                }
            }
            return {
                ...state,
                categories: [
                    ...state.categories,
                    {
                        id: newId,
                        name: action.name,
                        parentId: 0
                    }
                ]
            }
        case ADD_CATEGORY:
            return {
                ...state,
                nameNewCategory: '',
                categories: [
                    ...state.categories,
                    {
                        name: action.name,
                        id: +state.categories.length + 1,
                        parentId: action.parentId,
                    }
                ]
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                nameNewCategory: '',
                categories: state.categories.filter( el => el.id != action.id)
            }
        case CHANGE_CATEGORY:
            return {
                ...state,
                activeCategory: action.id
            }
        case SHOW_SUB_CATEGORIES:
            return {
                ...state,
                categories: state.categories.filter(el => {
                    if (el.parentId === action.id) {
                        return true
                    }
                })
            }
        default:
            return state;
    }
}

export default categoryReduser