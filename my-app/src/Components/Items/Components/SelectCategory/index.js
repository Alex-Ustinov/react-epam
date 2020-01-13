import React, { useState } from 'react';

const SelectCategories = ({ changeData, setNewData, dataCategories }) => {
    const [ selectValue, setSelectValue ] = useState(changeData.id);

    let selectCat = e => {
        setSelectValue(e.target.value)
        setNewData({
            ...changeData,
            categoryId: e.target.value
        });
    }

    return (
        <select value={selectValue} onChange={selectCat}>
            {dataCategories.map(el => (
                <option name="categoryId" key={el.id} value={el.id}>{el.name}</option>
            ))}
        </select>
    )
}

export default SelectCategories;
