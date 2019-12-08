import React from 'react'

const FormAddCategory = (props) => {
    let handler = (e) => {
        e.preventDefault()
        if(props.inputValue.trim()){
           props.addNewCategory(props.inputValue.trim())
        }
    }
    let changeInput = e =>{
        props.changeInput(e.target.value)
    }
    return(
        <form onSubmit={handler} >
            <input value= {props.inputValue} onChange={changeInput}/>
            <button type="submit">Add Category</button>
        </form>
    )
}

export default FormAddCategory