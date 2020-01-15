import React,{ useState } from 'react';

import FormAddCategory from '../FormAddCategory';

const Category = ({ deleteCategoty, changeCategory, id, addCategory, name, activeCategory, showListCategories, ofset, categories, openSubCategories }) => {
    const [ showForm, showFormAddCategory ] = useState(false);
    const [ stateCategory, changeStateCategory ] = useState(openSubCategories)

    const style = {
        paddingLeft: 30*Number(ofset)+'px'
    }

    let workWithCategories = [];
    let recursion = (data , subId, level=0) => {
        if(!data[subId]) return
        for (let t=0; t<data[subId].length; t += 1) {
            const child = data[subId][t];
            child.ofset = level;
            workWithCategories.push(child.id);
            recursion(data, child.id, level+1);
        }
    }

    let showCategories = id => {
        let obj = {};
        for (let t=0; t<categories.length; t += 1) {
            const category = categories[t]
            const parentId = category.parentId
            const currentCategory = obj[parentId] || []
            obj[parentId] = [ ...currentCategory, category ];
        }
        recursion(obj, id)
        return workWithCategories
    }


    let actWithSubCategories = () => {
        changeStateCategory(!stateCategory)
        if (stateCategory) {
            showListCategories([id], stateCategory);
        } else {
            showCategories(id);
            showListCategories(workWithCategories, stateCategory);
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
