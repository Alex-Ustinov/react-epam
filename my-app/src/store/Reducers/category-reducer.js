import { CREATE_MAIN_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY, CHANGE_CATEGORY, SHOW_SUB_CATEGORIES } from '../constants';

const initialState = {
    categories: [
        {
            id: 5,
            name: 'Category5',
            parentId: 0,
            openSubCategories: true,
        },
        {
            id: 9,
            name: 'Category9',
            parentId: 7,
            openSubCategories: false,
        },
        {
            id: 1,
            name: 'Category1',
            parentId: 0,
            openSubCategories: true,
        },
        {
            id: 2,
            name: 'Category2',
            parentId: 1,
            openSubCategories: false,
        },
        {
            id: 3,
            name: 'Category3',
            parentId: 1,
            openSubCategories: false,
        },
        {
            id: 4,
            name: 'Category4',
            parentId: 3,
            openSubCategories: false,
        },
        {
            id: 6,
            name: 'Category6',
            parentId: 4,
            openSubCategories: false,
        },
        {
            id: 7,
            name: 'Category7',
            parentId: 5,
            openSubCategories: false,
        },
        {
            id: 8,
            name: 'Category8',
            parentId: 6,
            openSubCategories: false,
        },
    ],
    activeCategory: 0
}

const categoryReduser = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MAIN_CATEGORY:
            let newId = 0
            for (let p = 0; p < initialState.categories.length; p += 1) {
                if ( initialState.categories[p].parentId === 0 && newId < initialState.categories[p].id ) {
                    newId = Number(initialState.categories[p].id) + 1;
                }
            }
            return {
                ...state,
                categories: [
                    ...state.categories,
                    {
                        id: newId,
                        name: action.name,
                        parentId: 0,
                        openSubCategories: true,
                    }
                ]
            }
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [
                    ...state.categories,
                    {
                        name: action.name,
                        id: +state.categories.length + 1,
                        parentId: action.parentId,
                        openSubCategories: true,
                    }
                ]
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(el => el.id != action.id)
            }
        case CHANGE_CATEGORY:
            return {
                ...state,
                activeCategory: action.id
            }
        case SHOW_SUB_CATEGORIES:
            return {
                ...state,
                categories: state.categories.map(el => el.parentId === action.id ? {...el, openSubCategories: !el.openSubCategories} : el)
            }
        default:
            return state;
    }
}

export default categoryReduser;