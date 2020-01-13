import React, { useState } from 'react';

import style from './index.css';

export const SearchIsDoneItem = ({ searchIsDone, activeCategory, isDoneSearch }) => {

    const pushCheckBox = e => {
        //searchIsDone(activeCategory, !isDoneSearch) 
        //searchIsDone(e.target.checked) 
        searchIsDone(!isDoneSearch) 
        console.log(isDoneSearch)
    }

    return(
        <div className="isDone">
            <input type="checkbox" checked={isDoneSearch} onChange={pushCheckBox} />
        </div>
    )
}