import React,{ useState } from 'react';

import FormAddCategory from '../FormAddCategory';

const Category = ({ deleteCategoty, changeCategory, id, addCategory, parentId, name, activeCategory, showListCategories, sideEfect }) => {
    const [ flag, showFormAddCategory ] = useState(false)

    const style = {
            paddingLeft: 30*Number(sideEfect)+'px'
    }

    let clickAdd = () => {
        showFormAddCategory(true)
    }
    let deleteOldCateg = () => {
        deleteCategoty(id)
    }
    let changeCat = () => {
        changeCategory(id)
    }
    let openSubCategories = e => {
        showListCategories(id)
    }

    return (
        <li onClick={changeCat} style={style}>
            <button onClick={openSubCategories}>V</button>
            { name }
            <button onClick={clickAdd}>Add</button>
            <button onClick={deleteOldCateg}>Delete</button>
            {flag && (id === activeCategory) && (
              <FormAddCategory
                addCategory={addCategory}
                parentId={id}
                flag={flag}
                showFormAddCategory={showFormAddCategory}
               />
            )}
        </li>
    )
}

export default Category
