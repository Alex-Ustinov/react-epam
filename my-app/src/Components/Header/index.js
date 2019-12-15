import React,{ useState } from 'react';

import { AddCategoryTitle } from './Components/AddCategoryTitle'

import style from './index.css';

const Header = props => {
    const { addMainCategory } = props;
    return (
        <header className='header'>
            <AddCategoryTitle addMainCategory={addMainCategory}/>
        </header>
    )
}

export default Header
