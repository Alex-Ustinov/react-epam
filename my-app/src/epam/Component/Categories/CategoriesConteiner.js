import React from "react";
import CategoriesTree from './CategoriesTree'
import {connect} from "react-redux";
import {addCategoryCreator} from '../../redux/category-reducer'
import {updateCategoriesCreater} from '../../redux/category-reducer'
import {deleteCategoriesCreater} from '../../redux/category-reducer'

let mapStateToProps = (state) => {
    return {
        categories: state.categoriesData.categories,
        nameNewCategory: state.categoriesData.nameNewCategory
    }
}

let mapStateToDispatch = (dispatch) => {
    return {
        addCategory: () => {
            dispatch(addCategoryCreator())
        },
        onNewCategoryChange: (nameNewCategory) => {
            dispatch(updateCategoriesCreater(nameNewCategory))
        },
        deleteCategory: (idCategory) => {
            dispatch(deleteCategoriesCreater(idCategory))
        }

    }
}
let CategoriesConteiner = connect(mapStateToProps,mapStateToDispatch)(CategoriesTree)
export default CategoriesConteiner
//export default connect(mapStateToProps,mapStateToDispatch)(CategoriesTree)