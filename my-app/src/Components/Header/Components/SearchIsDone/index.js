import React, { useState } from 'react';

import style from './index.css';

export const SearchIsDoneItem = ({ searchIsDone, isDoneSearch }) => {

    const pushCheckBox = () => {
        searchIsDone(isDoneSearch) 
    }

    return(
        <div className="isDone">
            <input type="checkbox" checked={isDoneSearch} onChange={pushCheckBox} />
        </div>
    )
}