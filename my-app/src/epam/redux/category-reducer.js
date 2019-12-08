import {UPDATE_NEW_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY, SAVE_ITEM, CHANGE_CATEGORY} from './Constants'

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
    nameNewCategory: '',
    activeCategory: 0
}

const categoryReduser = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_CATEGORY:
            return {
                ...state,
                nameNewCategory: action.body
            }
        case ADD_CATEGORY:
            return{
                ...state,
                nameNewCategory: '',
                categories: [
                    ...state.categories,
                    {
                        name: state.nameNewCategory,
                        id: +state.categories.length + 1,
                        parentId: action.parentId,
                    }
                ]
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                nameNewCategory: '',
                categories: state.categories.filter((el)=> {
                    console.log('el -->'+el.id)
                    if(el.id != action.id){
                        return true
                    }
                })
            }
        case SAVE_ITEM:
            return{
                ...state,
                items: state.items.map((el)=> {
                    if(el.id == action.obj.id){
                        return action.obj
                    }
                    return el
                })
            }
        case CHANGE_CATEGORY:
            console.log(action)
            return{
                ...state,
                activeCategory: action.id
            }

        default:
            return state
    }

}

export default categoryReduser