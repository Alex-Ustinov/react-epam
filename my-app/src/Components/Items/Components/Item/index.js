import React, { useState } from 'react';

import ItemAction from '../ItemAction';

const Item = ({ isDone, id, name, dataCategories, saveItem, categoryId, show }) => {
    const [ stateFormAction, showForm ] = useState(false);
    const [ dataItem, grabData ] = useState({
        name: name,
        isDone: isDone,
        categoryId: categoryId,
        id: id,
        show: show
    });

    let openForm = e => {
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
            <div>
                <li key={id}>
                    <input type="checkbox" checked={dataItem.isDone} onChange={changeCheckBox}/>
                    {name}
                    <button onClick={openForm}>X</button>
                </li>
                { stateFormAction && (<ItemAction
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
