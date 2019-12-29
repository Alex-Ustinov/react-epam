import React, { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { debounce } from 'debounce';
import { CircleSpinner } from 'react-spinners-kit';

import style from './index.css';

export const SearchItem = ({ searchItems, activeCategory, resultSearch }) => {
    const [enterValue, grabSugestion] = useState('')
    const [showSpiner, changeStateSpiner] = useState(resultSearch)

    let setSearchValues = e => {
        grabSugestion(e.target.value)
        let search = searchItems({enterValue: e.target.value, activeCategory})
        debounce(search,2000)
        changeStateSpiner(resultSearch)
    }
    return(
        <div className="search">
            <input value={enterValue} onChange={setSearchValues}/>
            <CircleSpinner 
                size={20} 
                color="#686769" 
                loading={showSpiner} 
            />
        </div>
    )
}