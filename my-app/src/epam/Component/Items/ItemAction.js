import React,{useState} from 'react'
import SelectCategories from "./selectCategory/SelectCatgory";

const ItemAction = (props) => {
    let oldDataItem = {
        name: props.name,
        isDone: props.isDone,
        categoryId: props.categoryId,
        id: props.id,
    }

    const[ dataItem, grabData ] = useState(oldDataItem)

    let handler = (e) => {
        e.preventDefault()
        props.saveItem(dataItem)
        props.showForm(!props.flag)
        props.setCheckbox(!props.ckeckbox)
    }

    let fieldChange = (e) => {
        let param = e.target.getAttribute('name')
        let elemValue = e.target.value
        let newDataItem = {
            ...dataItem,
        }
        newDataItem[ param ] = elemValue
        grabData(newDataItem)
    }

    return(
        <form onSubmit={handler} >
            <input name="name" value= {dataItem.name} onChange={fieldChange}/>
            <input name="isDone" type="checkbox" defaultChecked={dataItem.isDone} onChange={fieldChange}/>
            <SelectCategories dataItem={dataItem} grabData={grabData} dataCategories={props.dataCategories}/>
            <button type="submit">Save</button>
        </form>
    )
}

export default ItemAction