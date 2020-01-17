import React, { useState } from 'react';

const SelectCategories = ({ changeData, setNewData, dataCategories }) => {
    const [ selectValue, setSelectValue ] = useState(changeData.id);

    let selectCat = e => {
        const valueIdCategory = e.target.value
        setSelectValue(valueIdCategory);
        setNewData({
            ...changeData,
            categoryId: valueIdCategory
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
