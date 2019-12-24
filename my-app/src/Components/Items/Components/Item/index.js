import React,{ useState } from 'react';

import ItemAction from '../ItemAction';

const Item = ({ isDone, id, name, dataCategories, saveItem, categoryId }) =>{
    const [ flag, handler ] = useState(false)
    const [ dataItem, grabData ] = useState({
        name: name,
        isDone: isDone,
        categoryId: categoryId,
        id: id,
    });

    let openForm = e => {
        handler(!flag)
    }
    let changeCheckBox = () =>{
        saveItem({
            ...dataItem,
            isDone: !isDone
        })
        grabData({
            ...dataItem,
            isDone: !isDone
        })
    }
    return(
            <div>
                <li key={id}>
                    <input type="checkbox" checked={dataItem.isDone} onChange={changeCheckBox}/>
                    {name}
                    <button onClick={openForm}>X</button>
                </li>
                { flag && (<ItemAction
                                flag={flag}
                                dataCategories={dataCategories}
                                showForm={handler}
                                id={id}
                                name={name}
                                isDone={dataItem.isDone}
                                saveItem={saveItem}
                                categoryId={categoryId}
                                dataItem={dataItem}
                                grabData={grabData}
                             />
                )}
            </div>
    )
}

export default Item
