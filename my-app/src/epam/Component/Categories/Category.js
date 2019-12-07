import React,{useState} from 'react'
import FormAddCategory from './FormAddCategory'

const Category = (props) =>{
    console.log('-----!!')
    console.log(props)
    const[flag,handler] = useState(false)

    const Form = <FormAddCategory />
    let clickAdd = (e) => {
        e.preventDefault()
        handler(!flag)
    }
    let deleteOldCateg = (e) => {
        e.preventDefault()
        console.log('DELETE '+props.id)
        props.deleteCategoty(props.id)
    }

    return(
        <li className="">
            {props.name}
            <button onClick={clickAdd}>Add</button>
            <button onClick={deleteOldCateg}>Delete</button>
            {(!!flag) ? <FormAddCategory addNewCategory={props.add} inputValue={props.newValue} changeInput={props.changeInput}/>: ''}
        </li>
)
}

export default Category
