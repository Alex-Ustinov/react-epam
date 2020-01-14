import { CREATE_MAIN_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY, CHANGE_CATEGORY, LAUNCH_CATEGORIES } from '../constants';

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
            return {
                ...state,
                categories: [
                    ...state.categories,
                    {
                        id: state.categories.length + 1,
                        name: action.name,
                        parentId: 0,
                        openSubCategories: true,
                    }
                ]
            }
        case ADD_CATEGORY:
            let newCategories = state.categories.map(el => el.parentId == action.parentId ? {...el, openSubCategories: true} : el)
            newCategories.push({
                name: action.name,
                id: state.categories.length + 1,
                parentId: action.parentId,
                openSubCategories: true,
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
                categories: state.categories.filter(el => el.id != action.id)
            }
        case CHANGE_CATEGORY:
            return {
                ...state,
                activeCategory: action.id
            }
        case LAUNCH_CATEGORIES:
            if(action.stateCategory){
                return {
                    ...state,
                    categories: state.categories.map(
                                    el => action.categories.includes(el.parentId) ? {...el, openSubCategories: true} : el
                                )
                }
            }else{
                return {
                    ...state,
                    categories: state.categories.map(
                                    el => action.categories.includes(el.id) ? {...el, openSubCategories: false} : el
                                )
                }
            }
        default:
            return state;
    }
}

export default categoryReduser;