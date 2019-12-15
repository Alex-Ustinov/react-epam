import React from 'react';
import {connect} from 'react-redux';

import Index from './Components/CategoriesTree';
import { addCategoryCreator } from '../../store/Actions/category-actions';
import { updateCategoriesCreater } from '../../store/Actions/category-actions';
import { deleteCategoriesCreater } from '../../store/Actions/category-actions';
import { changeCategoryCreater } from '../../store/Actions/category-actions';

import Header from '../Header/index';

const mapStateToProps = state => ({
    categories: state.categoriesData.categories,
    nameNewCategory: state.categoriesData.nameNewCategory,
    activeCategory: state.categoriesData.activeCategory
})


const mapDispatchToProps = dispatch => ({
    addCategory: parentId => {
        dispatch(addCategoryCreator(parentId))
    },
    onNewCategoryChange: nameNewCategory => {
        dispatch(updateCategoriesCreater(nameNewCategory))
    },
    deleteCategory: idCategory => {
        dispatch(deleteCategoriesCreater(idCategory))
    },
    changeCategory: categoryId => {
        dispatch(changeCategoryCreater(categoryId))
    }
})
const CategoriesConteiner = connect(mapStateToProps,mapDispatchToProps)(Index)
export const HeaderConteiner = connect(mapStateToProps,mapDispatchToProps)(Header)

export default CategoriesConteiner

