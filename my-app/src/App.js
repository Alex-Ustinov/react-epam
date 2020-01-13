import React from 'react'

import CategoriesTree from './Components/Categories'
import ItemsList from './Components/Items';
import Header from './Components/Header';

import style from './App.css'

const App = () => (
    <div className="wrapper">
        <Header />
        <CategoriesTree />
        <ItemsList />
    </div>
)

export default App
