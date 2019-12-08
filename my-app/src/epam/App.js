import React, {useState} from 'react'
import CategoriesConteiner from './Component/Categories/CategoriesConteiner'
import style from './App.css'
import ItemsConteiner from "./Component/Items/ItemsConteiner";

const App = props => (
        <div className="wrapper">
            <CategoriesConteiner />
            <ItemsConteiner />
        </div>
)

export default App