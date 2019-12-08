import React from "react";
import CategoriesTree from './CategoriesTree'
import {connect} from "react-redux";
import {addCategoryCreator} from '../../redux/Actions'
import {updateCategoriesCreater} from '../../redux/Actions'
import {deleteCategoriesCreater} from '../../redux/Actions'
import {changeCategoryCreater} from '../../redux/Actions'

const mapStateToProps = (state) => {
    return {
        categories: state.categoriesData.categories,
        nameNewCategory: state.categoriesData.nameNewCategory
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        addCategory: (parentId) => {
            dispatch(addCategoryCreator(parentId))
        },
        onNewCategoryChange: (nameNewCategory) => {
            dispatch(updateCategoriesCreater(nameNewCategory))
        },
        deleteCategory: (idCategory) => {
            dispatch(deleteCategoriesCreater(idCategory))
        },
        changeCategory: (categoryId) => {
            dispatch(changeCategoryCreater(categoryId))
        }
    }
}
const CategoriesConteiner = connect(mapStateToProps,mapStateToDispatch)(CategoriesTree)

export default CategoriesConteiner
