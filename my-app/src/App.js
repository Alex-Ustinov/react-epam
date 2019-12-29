import React from 'react'

import CategoriesTree from './Components/Categories/Components/CategoriesTree'
import ItemsList from './Components/Items/Components/ItemsList';
import Header from './Components/Header/Components/Header';

import style from './App.css'

const App = () => (
    <div className="wrapper">
        <Header />
        <CategoriesTree />
        <ItemsList />
    </div>
)

export default App
