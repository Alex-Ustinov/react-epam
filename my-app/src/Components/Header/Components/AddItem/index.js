import React, { useState } from 'react';

import style from './index.css';

export const AddItem = ({ addNewItem, activeCategory }) => {
    const [ nameNewItem, setNameNewItem ] = useState('')
    const sentNewItem = e => {
        e.preventDefault()
        if (activeCategory === 0) {
            alert('Выберите категорию для нового item !')
        }
        if (nameNewItem.length === 0) {
            alert('Вы не ввели название для Item')
        }
        if (nameNewItem && activeCategory !== 0) {
            addNewItem({
                name: nameNewItem.trim(),
                categoryId: activeCategory,
                isDone: false,
                show: true
            })
            setNameNewItem('')
        }
    }
    const changeDataInput = e => {
        setNameNewItem(e.target.value)
    }
    return(
        <form className="input" onSubmit={sentNewItem}>
            <input value={nameNewItem} onChange={changeDataInput}/>
            <button type="submit">Add</button>
        </form>
    )
}