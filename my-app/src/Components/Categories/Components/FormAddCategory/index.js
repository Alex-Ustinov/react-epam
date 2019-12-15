import React, { useState } from 'react'

const FormAddCategory = props => {
    const { addCategory, parentId } = props
    const [ newName, sentNewCategory ] = useState('')
    let pushCategory = e => {
        e.preventDefault()
        if (newName.trim()) {
            addCategory(newName, parentId)
        }
    }
    let changeDataInput = e => {
        sentNewCategory(e.target.value)
    }
    return(
        <form onSubmit={pushCategory}>
            <input value= {newName} onChange={changeDataInput}/>
            <button type="submit">Add Category</button>
        </form>
    )
}

export default FormAddCategory