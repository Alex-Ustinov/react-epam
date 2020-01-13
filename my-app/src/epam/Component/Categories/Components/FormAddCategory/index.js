import React from 'react'

const FormAddCategory = props => {
    const { inputValue, addNewCategory, parentId, showFormAddCategory, flag, changeInput } = props
    let handler = e => {
        e.preventDefault()
        if (inputValue.trim()) {
            showFormAddCategory(!flag)
            addNewCategory(parentId)
        }
    }
    let changeDataInput = e => {
        changeInput(e.target.value)
    }
    return(
        <form onSubmit={handler}>
            <input value= {inputValue} onChange={changeDataInput}/>
            <button type="submit">Add Category</button>
        </form>
    )
}

export default FormAddCategory