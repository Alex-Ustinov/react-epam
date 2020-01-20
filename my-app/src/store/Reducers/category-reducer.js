import { CREATE_MAIN_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY, CHANGE_CATEGORY, LAUNCH_CATEGORIES } from '../constants';

const initialState = {
    categories: [
        {
            id: 5,
            name: 'Category5',
            parentId: 0,
            openSubCategories: true,
            isOpen: false,
        },
        {
            id: 9,
            name: 'Category9',
            parentId: 7,
            openSubCategories: false,
            isOpen: false,
        },
        {
            id: 1,
            name: 'Category1',
            parentId: 0,
            openSubCategories: true,
            isOpen: false,
        },
        {
            id: 2,
            name: 'Category2',
            parentId: 1,
            openSubCategories: false,
            isOpen: false,
        },
        {
            id: 3,
            name: 'Category3',
            parentId: 1,
            openSubCategories: false,
            isOpen: false,
        },
        {
            id: 4,
            name: 'Category4',
            parentId: 3,
            openSubCategories: false,
            isOpen: false,
        },
        {
            id: 6,
            name: 'Category6',
            parentId: 4,
            openSubCategories: false,
            isOpen: false,
        },
        {
            id: 7,
            name: 'Category7',
            parentId: 5,
            openSubCategories: false,
            isOpen: false,
        },
        {
            id: 8,
            name: 'Category8',
            parentId: 6,
            openSubCategories: false,
            isOpen: false,
        },
    ],
    activeCategory: 0
}


const categoryReduser = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MAIN_CATEGORY:
            return {
                ...state,
                categories: [
                    ...state.categories,
                    {
                        id: state.categories.length + 1,
                        name: action.name,
                        parentId: 0,
                        openSubCategories: true,
                        isOpen: false,
                    }
                ]
            }
        case ADD_CATEGORY:
            let newCategories = state.categories.map(el => el.parentId === action.parentId ? {...el, openSubCategories: true} : el)
            newCategories.push({
                name: action.name,
                id: state.categories.length + 1,
                parentId: action.parentId,
                openSubCategories: true,
                isOpen: false,
            })
            return {
                ...state,
                categories: [
                    ...newCategories,
                ]
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(el => el.id !== action.id)
            }
        case CHANGE_CATEGORY:
            return {
                ...state,
                activeCategory: action.id,
                categories: state.categories.map(el => el.parentId === action.id || el.id === action.id
                    ? {...el, isOpen: !el.isOpen} 
                    : el
                )
            }
        case LAUNCH_CATEGORIES:
            const elId = action.stateCategory ? 'parentId' : 'id';

            return {
                ...state,
                categories: state.categories.map(el => action.categories.includes(el[elId]) 
                    ? {...el, openSubCategories: !!action.stateCategory,} 
                    : el
                )
            }
        default:
            return state;
    }
}

export default categoryReduser;