import React,{ useState } from 'react';
import { connect } from 'react-redux';

import Category from './Components/Category';
import { establishCategories } from './helpers';
import { addCategoryCreator, updateCategoriesCreater, deleteCategoriesCreater, changeCategoryCreater, actualSubCategoriesCreater } from '../../store/Actions/category-actions';

import style from './index.css';

const CategoriesTree = ({ categories, deleteCategory, addCategory, changeCategory, activeCategory, showListCategories }) => {
    return (
        <div className="bloc">
            <ul className="category">
                {establishCategories(categories, true).filter(el => el.openSubCategories).map(el=>(
                    <Category
                        key={el.id}
                        {...el}
                        openSubCategories={el.openSubCategories}
                        deleteCategoty={deleteCategory}
                        addCategory={addCategory}
                        changeCategory={changeCategory}
                        activeCategory={activeCategory}
                        showListCategories={showListCategories}
                        ofset={el.ofset}
                        categories={categories}
                    />
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = state => ({
    categories: state.categoriesData.categories,
    activeCategory: state.categoriesData.activeCategory
});

const mapDispatchToProps = dispatch => ({
    addCategory: (nameCategory, parentId) => {
        dispatch(addCategoryCreator(nameCategory, parentId));
    },
    onNewCategoryChange: nameNewCategory => {
        dispatch(updateCategoriesCreater(nameNewCategory));
    },
    deleteCategory: idCategory => {
        dispatch(deleteCategoriesCreater(idCategory));
    },
    changeCategory: categoryId => {
        dispatch(changeCategoryCreater(categoryId));
    },
    showListCategories: (categoryId, stateCategory) => {
        dispatch(actualSubCategoriesCreater(categoryId, stateCategory));
    }
})
export default connect (mapStateToProps,mapDispatchToProps)(CategoriesTree);