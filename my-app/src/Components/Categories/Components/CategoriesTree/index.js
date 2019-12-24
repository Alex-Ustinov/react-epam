import React from 'react';
import { connect } from 'react-redux';

import Category from '../Category';
import { addCategoryCreator, updateCategoriesCreater, deleteCategoriesCreater, changeCategoryCreater, actualSubCategoriesCreater} from '../../../../store/Actions/category-actions';

import style from './index.css';

const CategoriesTree = ({ categories, deleteCategory, addCategory, changeCategory, activeCategory, showListCategories } ) => {
    let showCategories = () => {
        let categoriesOnPage = [];
        for (let h=0; h<categories.length; h++) {
            if (categories[h].openSubCategories) {
                categoriesOnPage.push(<Category
                                        key={categories[h].id}
                                        id={categories[h].id}
                                        name={categories[h].name}
                                        parentId={categories[h].parentId}
                                        deleteCategoty={deleteCategory}
                                        addCategory={addCategory}
                                        changeCategory={changeCategory}
                                        activeCategory={activeCategory}
                                        showListCategories={showListCategories}
                                      />);
            }
        }
        return categoriesOnPage;
    }

    return (
        <div className="bloc">
            <ul className="category">
                {showCategories().map( el => (el))}
            </ul>
        </div>
    );
}

const mapStateToProps = state => ({
    categories: state.categoriesData.categories,
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
export default connect (mapStateToProps,mapDispatchToProps)(CategoriesTree);