import React, { useState } from 'react';

import ItemAction from '../ItemAction';

import style from './index.css';

const Item = ({ isDone, id, name, dataCategories, saveItem, categoryId, show }) => {
    const [ stateFormAction, showForm ] = useState(false);
    const [ dataItem, grabData ] = useState({
        name: name,
        isDone: isDone,
        categoryId: categoryId,
        id: id,
        show: show
    });

    let openForm = () => {
        showForm(!stateFormAction);
    }
    let changeCheckBox = () =>{
        let data = {
            ...dataItem,
            isDone: !isDone
        }
        saveItem(data);
        grabData(data);
    }
    return(
            <div className="card">
                <li key={id}>
                    <input type="checkbox" className="checkbox" checked={dataItem.isDone} onChange={changeCheckBox}/>
                    {name}
                    <button onClick={openForm}>X</button>
                </li>
                {stateFormAction && (
                    <ItemAction
                        dataCategories={dataCategories}
                        showForm={showForm}
                        saveItem={saveItem}
                        dataItem={dataItem}
                        grabData={grabData}
                    />
                )}
            </div>
    )
}

export default Item
