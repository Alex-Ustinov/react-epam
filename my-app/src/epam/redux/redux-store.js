import {createStore, combineReducers} from "redux"
import categoryReduser from './category-reducer'

let reducers = combineReducers({
    categoriesData: categoryReduser,
})

export let store = createStore(reducers)
window.store = store