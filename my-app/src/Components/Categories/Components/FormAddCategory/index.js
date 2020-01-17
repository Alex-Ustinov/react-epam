import React, { useState } from 'react';

const FormAddCategory = ({ addCategory, parentId, showFormAddCategory, showForm }) => {
    const [ newName, sentNewCategory ] = useState('');
    let pushCategory = e => {
        e.preventDefault()
        if (newName.trim()) {
            addCategory(newName.trim(), parentId);
        }
        if (showFormAddCategory) {
            showFormAddCategory(!showForm);
        }
    }
    let changeDataInput = e => {
        const inputValue = e.target.value
        if (inputValue.trim()) {
            sentNewCategory(inputValue.trim());
        }
    }
    return(
        <form onSubmit={pushCategory}>
            <input value={newName} onChange={changeDataInput}/>
            <button type="submit">Add Category</button>
        </form>
    )
}

export default FormAddCategory;