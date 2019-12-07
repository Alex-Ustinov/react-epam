import React from 'react'

const FormAddCategory = (props) => {
    let handler = (e) => {
        e.preventDefault()
        console.log(props.inputValue.trim())
        if(props.inputValue.trim()){
           props.addNewCategory(props.inputValue.trim())
        }
    }
    return(
        <form onSubmit={handler} >
            <input value= {props.inputValue} onChange={(event)=>{props.changeInput(event.target.value)}}/>
            <button type="submit">Add Category</button>
        </form>
    )
}
export default FormAddCategory