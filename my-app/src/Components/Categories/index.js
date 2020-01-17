import React,{ useEffect } from 'react';
import { connect } from 'react-redux';

import Category from './Components/Category';
import { addCategoryCreator, updateCategoriesCreater, deleteCategoriesCreater, changeCategoryCreater, actualSubCategoriesCreater} from '../../store/Actions/category-actions';

import style from './index.css';

const CategoriesTree = ({ categories, deleteCategory, addCategory, changeCategory, activeCategory, showListCategories }) => {

    let treeCategories = [];

    let recursion = (data , subId=0, level=0) => {
        if(!data[subId]) return;
        for (let t=0; t<data[subId].length; t += 1) {
            const child = data[subId][t];
            child.ofset = level;
            treeCategories.push(child);
            recursion(data, child.id, level+1);
        }
    }

    let showCategories = () => {
        let obj = {};
        for (let t=0; t<categories.length; t += 1) {
            const category = categories[t];
            const parentId = category.parentId;
            const currentCategory = obj[parentId] || []
            obj[parentId] = [ ...currentCategory, category ];
        }
        recursion(obj)
        return treeCategories;
    }

    return (
        <div className="bloc">
            <ul className="category">
                {showCategories().filter(el => el.openSubCategories).map(el=>(
                    <Category
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        parentId={el.parentId}
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