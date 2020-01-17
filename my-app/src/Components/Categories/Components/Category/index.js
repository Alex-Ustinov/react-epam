import React,{ useState } from 'react';

import FormAddCategory from '../FormAddCategory';
import closeCategories from '../../helper/closeCategories';

const Category = ({ deleteCategoty, changeCategory, id, addCategory, name, activeCategory, showListCategories, ofset, categories, openSubCategories }) => {
    const [ showForm, showFormAddCategory ] = useState(false);
    const [ stateCategory, changeStateCategory ] = useState(openSubCategories);

    const style = {
        paddingLeft: 30*Number(ofset)+'px'
    }

    let actWithSubCategories = () => {
        changeStateCategory(!stateCategory)
        if (stateCategory) {
            showListCategories([id], stateCategory);
        } else {
            showListCategories(closeCategories(id, categories), stateCategory);
        }
    }
    
    return (
        <li onClick={() => {changeCategory(id)}} style={style}>
            <button onClick={actWithSubCategories}>V</button>
            {name}
            <button onClick={() => {showFormAddCategory(true)}}>Add</button>
            <button onClick={() => {deleteCategoty(id)}}>Delete</button>
            {showForm && (id === activeCategory) && (
              <FormAddCategory
                addCategory={addCategory}
                parentId={id}
                showForm={showForm}
                showFormAddCategory={showFormAddCategory}
               />
            )}
        </li>
    )
}

export default Category;
