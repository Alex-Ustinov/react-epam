import React, { useState } from 'react'

export const AddCategoryTitle = props => {
    const { addMainCategory } = props
    const [ nameNewCategory, sentNewCategory ] = useState('')
    let handler = e => {
        e.preventDefault()
        if (nameNewCategory) {
            addMainCategory(nameNewCategory)
        }
    }
    let changeDataInput = e => {
        console.log(nameNewCategory)
        sentNewCategory(e.target.value)
    }
    return(
        <form onSubmit={handler}>
            <input value= {nameNewCategory} onChange={changeDataInput}/>
            <button type="submit">Add</button>
        </form>
    )
}