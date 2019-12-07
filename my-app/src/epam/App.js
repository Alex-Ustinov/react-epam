import React, {useState} from 'react'
import CategoriesConteiner from './Component/Categories/CategoriesConteiner'
import style from './App.css'

const App = (props) => {
    console.log('props---')
    console.log(props)
    return(
        <div className="wrapper">
            <CategoriesConteiner />
        </div>
    )
}

export default App