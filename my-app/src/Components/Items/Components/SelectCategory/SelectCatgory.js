import React from 'react';

const SelectCategories = props => {
    const { dataItem, grabData, dataCategories } = props
    let selectCat = e => {
        grabData({
            ...dataItem,
            categoryId: e.target.value
        })
    }

    return(
        <select value={dataItem.id} onChange={selectCat}>
            {dataCategories.map( el => (
                <option name="categoryId" key={el.id} value={el.id}>{ el.name }</option>
            ))}
        </select>
    )
}

export default SelectCategories
