import React from 'react'

export const AddCategoryTitle = props => {
    const { inputValue, addNewCategory, parentId, showFormAddCategory, flag, changeInput } = props
    let handler = e => {
        e.preventDefault()
        if (inputValue.trim()) {
            addNewCategory(parentId)
        }
    }
    let changeDataInput = e => {
        changeInput(e.target.value)
    }
    return(
        <form onSubmit={handler}>
            <input value= {inputValue} onChange={changeDataInput}/>
            <button type="submit">Add</button>
        </form>
    )
}