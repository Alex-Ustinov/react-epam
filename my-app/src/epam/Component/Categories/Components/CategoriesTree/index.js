import React from 'react'

import Category from "./Category";

import style from './CategoriesTree.module.css'

const CategoriesTree = props => {
    const { categories, deleteCategory, nameNewCategory, onNewCategoryChange, addCategory, changeCategory, activeCategory } = props;
    return (
        <div className={style.bloc}>
            <ul className={style.category}>
                { categories.map( el => (
                    <Category
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        parentId = {el.parentId}
                        deleteCategoty={deleteCategory}
                        add={addCategory}
                        newValue={nameNewCategory}
                        changeInput={onNewCategoryChange}
                        changeCategory={changeCategory}
                        activeCategory={activeCategory}
                    />
                ))}
            </ul>
        </div>
    );
}

export default CategoriesTree