import React, { useState} from 'react';
import { DebounceInput } from 'react-debounce-input';
import { debounce } from 'debounce';

import style from './index.css';

export const SearchItem = ({ searchItems, activeCategory }) => {
    const [enterValue, grabSugestion] = useState('')

    let setSearchValues = e => {
        grabSugestion(e.target.value)
        searchItems({enterValue, activeCategory})
    }
    /*
    let sentSearch = e =>{
        grabSugestion(e.target.value)
        let sent = searchItems({enterValue, activeCategory})
        debounce(sent, 1000)
    }
    */
    return(
        <div className="search">
            <DebounceInput
             minLength={1}
             debounceTimeout={0}
             onChange={setSearchValues}
            />
        </div>
    )
}