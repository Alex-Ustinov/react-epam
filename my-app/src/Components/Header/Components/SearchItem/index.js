import React, { useState, useEffect } from 'react';
import { CircleSpinner } from 'react-spinners-kit';

import debounced from '../../../../Helpers/Debounce/index';

import style from './index.css';

export const SearchItem = ({ searchItems, activeCategory }) => {
   const [ showSpiner, changeStateSpiner ] = useState(false);
   const [ query, setQuery ] = useState('');

   useEffect(() => {
     debounced(() => {
        if(query.length > 0){
            searchItems({enterValue: query, activeCategory});
            changeStateSpiner(false);
        }
     }, 2000)();
   })
 
   const handleOnChange = e => {
        changeStateSpiner(true);
        setQuery(e.target.value);
   }

    return(
        <div className="search">
            <input value={query} onChange={handleOnChange}/>
            <CircleSpinner 
                size={20} 
                color="#686769" 
                loading={showSpiner} 
            />
        </div>
    )
}