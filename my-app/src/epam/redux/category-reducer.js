const UPDATE_NEW_CATEGORY = 'UPDATE-NEW-CATEGORY'
const ADD_CATEGORY = 'ADD-CATEGORY'
const DELETE_CATEGORY = 'DELETE-CATEGORY'
const SAVE_ITEM = 'SAVE-ITEM'
const CHANGE_CATEGORY = 'CHANGE-CATEGORY'

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
            name: 'Item1',
            isDone: true,
            categoryId: 1
        },
        {
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
            var body = state.nameNewCategory
            var newId = Number(state.categories.length) + 1
            return{
                ...state,
                nameNewCategory: '',
                categories: [...state.categories, {name:body, id: newId}]
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
export const addCategoryCreator = () => {
    return {type: ADD_CATEGORY}
}
export const updateCategoriesCreater = (text) =>{
    return {type: UPDATE_NEW_CATEGORY, body: text}
}
export const deleteCategoriesCreater = (id) =>{
    return {type: DELETE_CATEGORY, id: id}
}
export const saveItemCreater = (obj) =>{
    return {type: SAVE_ITEM, obj: obj}
}
export const changeCategoryCreater = (id) =>{
    return {type: CHANGE_CATEGORY, id: id}
}


export default categoryReduser