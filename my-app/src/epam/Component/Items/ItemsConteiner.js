import React from "react";
import {connect} from "react-redux";
import {saveItemCreater} from '../../redux/category-reducer'
import TaskList from "./TaskList";

let mapStateToProps = (state) => {
    return {
        items: state.categoriesData.items,
        activeCategory: state.categoriesData.activeCategory
    }
}

let mapStateToDispatch = (dispatch) => {
    return {
        saveItem: (newDataItem) => {
            dispatch(saveItemCreater(newDataItem))
        },
    }
}
let ItemsConteiner = connect(mapStateToProps,mapStateToDispatch)(TaskList)
export default ItemsConteiner