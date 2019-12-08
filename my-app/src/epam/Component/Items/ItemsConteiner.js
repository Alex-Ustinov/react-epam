import React from "react";
import {connect} from "react-redux";
import {saveItemCreater} from '../../redux/category-reducer'
import TaskList from "./TaskList";

const mapStateToProps = (state) => {
    return {
        items: state.categoriesData.items,
        activeCategory: state.categoriesData.activeCategory,
        dataCategories: state.categoriesData.categories
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        saveItem: (newDataItem) => {
            dispatch(saveItemCreater(newDataItem))
        },
    }
}
const ItemsConteiner = connect(mapStateToProps,mapStateToDispatch)(TaskList)

export default ItemsConteiner