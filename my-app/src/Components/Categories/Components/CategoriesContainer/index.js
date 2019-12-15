import React from 'react';
import {connect} from 'react-redux';

import CategoriesTree from '../CategoriesTree';
import { addCategoryCreator } from '../../../../store/Actions/category-actions';
import { updateCategoriesCreater } from '../../../../store/Actions/category-actions';
import { deleteCategoriesCreater } from '../../../../store/Actions/category-actions';
import { changeCategoryCreater } from '../../../../store/Actions/category-actions';
import { actualSubCategoriesCreater } from '../../../../store/Actions/category-actions';

const mapStateToProps = state => ({
    categories: state.categoriesData.categories,
    nameNewCategory: state.categoriesData.nameNewCategory,
    activeCategory: state.categoriesData.activeCategory
})


const mapDispatchToProps = dispatch => ({
    addCategory: (nameCategory, parentId) => {
        dispatch(addCategoryCreator(nameCategory, parentId))
    },
    onNewCategoryChange: nameNewCategory => {
        dispatch(updateCategoriesCreater(nameNewCategory))
    },
    deleteCategory: idCategory => {
        dispatch(deleteCategoriesCreater(idCategory))
    },
    changeCategory: categoryId => {
        dispatch(changeCategoryCreater(categoryId))
    },
    showListCategories: categoryId => {
        dispatch(actualSubCategoriesCreater(categoryId))
    }
})
const CategoriesContainer = connect(mapStateToProps,mapDispatchToProps)(CategoriesTree)

export default CategoriesContainer

