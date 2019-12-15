import React,{ useState } from 'react';

import FormAddCategory from './FormAddCategory';

const Category = props => {
    const [ flag, showFormAddCategory ] = useState(false)
    const { deleteCategoty, changeCategory, id, add, newValue, changeInput, parentId, name, activeCategory } = props


    let clickAdd = () => {
        showFormAddCategory(!flag)
    }
    let deleteOldCateg = () => {
        deleteCategoty(id)
    }
    let changeCat = () => {
        changeCategory(id)
    }

    return (
        <li onClick={changeCat}>
            { name }
            <button onClick={clickAdd}>Add</button>
            <button onClick={deleteOldCateg}>Delete</button>
            { flag && (id === activeCategory) && (<FormAddCategory
                            addNewCategory={add}
                            inputValue={newValue}
                            changeInput={changeInput}
                            parentId={parentId}
                            flag={flag}
                            showFormAddCategory={showFormAddCategory}
                         />
            )}
        </li>
    )
}

export default Category
