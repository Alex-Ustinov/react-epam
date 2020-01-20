import React,{ useState } from 'react';

import FormAddCategory from '../FormAddCategory';
import { establishCategories } from '../../helpers';

const Category = ({ parentId, isOpen, deleteCategoty, changeCategory, id, addCategory, name, activeCategory, showListCategories, ofset, categories, openSubCategories }) => {
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
            showListCategories(establishCategories(categories, false, id), stateCategory);
        }
    }

    //const arrow = isOpen ? '&dArr;' : '&rArr;'
    
    return (
        <li onClick={() => {changeCategory(id)}} style={style}>
        <button onClick={actWithSubCategories}>{isOpen ? 'V' : '^' }</button>
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
