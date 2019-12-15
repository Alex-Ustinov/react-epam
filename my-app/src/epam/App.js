import React from 'react'

import CategoriesConteiner from './Components/Categories/Components/CategoriesContainer'
import ItemsConteiner from "./Components/Items/Components/ItemsContainer";
import HeaderContainer from "./Components/Header/Components/HeadrConteiner"

import style from './App.css'

const App = () => (
    <div className="wrapper">
        <HeaderContainer />
        <CategoriesConteiner />
        <ItemsConteiner />
    </div>
)

export default App
