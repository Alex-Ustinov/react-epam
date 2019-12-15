import React,{useState} from 'react';

import SelectCategories from '../SelectCategory/SelectCatgory';

const ItemAction = props => {
    const { dataItem, grabData, isDone, dataCategories, saveItem, showForm } = props

    let handler = e => {
        e.preventDefault()
        saveItem(dataItem)
        showForm(false)
    }

    let fieldChange = (e) => {
        let param = e.target.getAttribute('name')
        grabData({
            ...dataItem,
            [param] : e.target.value
        })
    }

    return(
        <form onSubmit={handler} >
            <input name="name" value= {dataItem.name} onChange={fieldChange}/>
            <input name="isDone" type="checkbox" checked={dataItem.isDone} onChange={fieldChange}/>
            <SelectCategories dataItem={dataItem} grabData={grabData} dataCategories={dataCategories}/>
            <button type="submit">Save</button>
        </form>
    )
}

export default ItemAction