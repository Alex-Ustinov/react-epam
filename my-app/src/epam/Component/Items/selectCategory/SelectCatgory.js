import React,{useState} from 'react'

const SelectCategories = (props) =>{

    let selectCat = (e) => {
        let newItem = {...props.dataItem}
        newItem['categoryId'] = e.target.value
        props.grabData(newItem)
    }

    return(
            <select onChange={selectCat}>
                {props.dataCategories.map((el)=>{
                    return <option name="categoryId" key={el.id} value={el.id} >{el.name}</option>
                })}
            </select>
    )
}

export default SelectCategories
