const UPDATE_NEW_CATEGORY = 'UPDATE-NEW-CATEGORY'
const ADD_CATEGORY = 'ADD-CATEGORY'
const DELETE_CATEGORY = 'DELETE-CATEGORY'
const SAVE_ITEM = 'SAVE-ITEM'
const CHANGE_TEXT_ITEM = 'CHANGE-TEXT-ITEM'
const CHANGE_ACTION_ITEM = 'CHANGE-ACTION-ITEM'
const CHANGE_CATEGORY_IN_ITEM = 'CHANGE-CATEGORY-IN-ITEM'

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
            categoryId: 3
        },
        {
            name: 'Item2',
            isDone: false,
            categoryId: 3
        },
    ],
    nameNewItem: '',
    flagNewItem: '',
    categoryInNewItem: '',
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
                    if(el.id == action.id){
                         var newItem = {}
                         newItem['name'] = state.nameNewItem
                         newItem['isDone'] = state.flagNewItem
                         newItem['categoryId'] = state.categoryInNewItem
                        return newItem
                    }
                    return el
                })
                /*
                items: state.items.map((el)=> {
                    if(el.id == action.obj.id){
                        var newItem = {}
                        for(var k in el){
                            if(action.obj[k]){
                                newItem[k] = action.obj[k]
                            }
                        }
                        return newItem
                    }
                    return el
                })
                */
            }
        case CHANGE_TEXT_ITEM:
            return {
                ...state,
                nameNewItem: action.text
            }
        case CHANGE_ACTION_ITEM:
            return {
                ...state,
                flagNewItem: action.flag
            }
        case CHANGE_CATEGORY_IN_ITEM:
            return {
                ...state,
                categoryInNewItem: action.idCateg
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
export const saveItemCreater = (id) =>{
    return {type: SAVE_ITEM, idItem: id}
}
export const updateItemTextCreater = (text) =>{//idItem,
    return {type: CHANGE_TEXT_ITEM, text: text}//, idItem: idItem
}
export const updateItemFlagCreater = (flag) =>{
    return {type: CHANGE_ACTION_ITEM, flag: flag}
}
export const updateItemCategoryCreater = (idCateg) =>{
    return {type: CHANGE_ACTION_ITEM, idCateg: idCateg}
}

export default categoryReduser