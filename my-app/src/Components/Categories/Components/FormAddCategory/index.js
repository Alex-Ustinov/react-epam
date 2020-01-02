import React, { useState } from 'react';

const FormAddCategory = ({ addCategory, parentId, showFormAddCategory, flag }) => {
    const [ newName, sentNewCategory ] = useState('')
    let pushCategory = e => {
        e.preventDefault()
        if (newName.trim()) {
            addCategory(newName, parentId);
        }
        showFormAddCategory(!flag);
    }
    let changeDataInput = e => {
        sentNewCategory(e.target.value);
    }
    return(
        <form onSubmit={pushCategory}>
            <input value={newName} onChange={changeDataInput}/>
            <button type="submit">Add Category</button>
        </form>
    )
}

export default FormAddCategory;