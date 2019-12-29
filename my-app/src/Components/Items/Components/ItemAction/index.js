import React,{useState} from 'react';

import SelectCategories from '../SelectCategory';

const ItemAction = ({ dataItem, grabData, isDone, dataCategories, saveItem, showForm }) => {

    let sentForm = e => {
        e.preventDefault()
        saveItem(dataItem)
        showForm(false)
    }

    let fieldChange = e => {
        let param = e.target.getAttribute('name');
        if(param === 'isDone'){
            grabData({
                ...dataItem,
                isDone: !dataItem.isDone
            })
        } else {
            grabData({
                ...dataItem,
                [param]: e.target.value
            })
        }
    }

    return(
        <form onSubmit={sentForm} >
            <input name="name" value={dataItem.name} onChange={fieldChange} />
            <input name="isDone" type="checkbox" checked={dataItem.isDone} onChange={fieldChange}  />
            <SelectCategories dataItem={dataItem} grabData={grabData} dataCategories={dataCategories} />
            <button type="submit">Save</button>
        </form>
    )
}

export default ItemAction