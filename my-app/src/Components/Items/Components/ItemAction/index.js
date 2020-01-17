import React, { useState } from 'react';

import SelectCategories from '../SelectCategory';

import style from './index.css';

const ItemAction = ({ dataItem, grabData, dataCategories, saveItem, showForm }) => {
    const [ changeData, setNewData ] = useState({...dataItem});
    const [ stateForm, changeActiveForm ] = useState(true);

    let sentForm = e => {
        e.preventDefault();
        saveItem(changeData);
        showForm(false);
    }

    let fieldChange = e => {
        const param = e.target.getAttribute('name');
        const value = param === 'isDone' ? !changeData.isDone : e.target.value;
        const data = {
            ...changeData,
            [param]: value,
        }

        setNewData(data);
        grabData(data);
    }

    let closeForm = e => {
        e.preventDefault();
        changeActiveForm(false);
    }

    return(
        <div>
            {stateForm && (
                <div className="blackout">
                    <div className="modal">
                        <form onSubmit={sentForm} >
                            <input name="name" value={changeData.name} onChange={fieldChange} />
                            <input name="isDone" type="checkbox" checked={changeData.isDone} onChange={fieldChange}  />
                            <SelectCategories changeData={changeData} setNewData={setNewData} dataCategories={dataCategories} />
                            <button type="submit">Save</button>
                            <button type="submit"onClick={closeForm} className="close">Close</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ItemAction;