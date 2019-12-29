import React from 'react';
import { connect } from 'react-redux';

import Category from '../Category';
import { addCategoryCreator, updateCategoriesCreater, deleteCategoriesCreater, changeCategoryCreater, actualSubCategoriesCreater} from '../../../../store/Actions/category-actions';

import style from './index.css';

const CategoriesTree = ({ categories, deleteCategory, addCategory, changeCategory, activeCategory, showListCategories } ) => {
    let obj = {}
    let treeCategories = []

   let recursion = (data , subId=0, level=0) => {
        if(!data[subId]) return
        for (let t=0; t<data[subId].length; t++) {
            data[subId][t].sideEfect = level
            treeCategories.push(data[subId][t])
            recursion(data,data[subId][t].id,level+1)
        }
    }


    let showCategories = () => {

        for (let t=0; t<categories.length; t++) {
            if(!obj[categories[t].parentId]){
                obj[categories[t].parentId] = []
                obj[categories[t].parentId].push(categories[t])
            }else{
                obj[categories[t].parentId].push(categories[t])
            }
        }

        recursion(obj)

        let categoriesOnPage = [];

        for (let h=0; h<treeCategories.length; h++) {
            if (treeCategories[h].openSubCategories) {

                categoriesOnPage.push(<Category
                                        key={treeCategories[h].id}
                                        id={treeCategories[h].id}
                                        name={treeCategories[h].name}
                                        parentId={treeCategories[h].parentId}
                                        deleteCategoty={deleteCategory}
                                        addCategory={addCategory}
                                        changeCategory={changeCategory}
                                        activeCategory={activeCategory}
                                        showListCategories={showListCategories}
                                        sideEfect={treeCategories[h].sideEfect}
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