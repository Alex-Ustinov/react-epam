import React,{useState} from 'react'
import FormAddCategory from './FormAddCategory'

const Category = (props) =>{
    const[ flag, handler ] = useState(false)

    let clickAdd = (e) => {
        e.preventDefault()
        handler(!flag)
    }
    let deleteOldCateg = (e) => {
        e.preventDefault()
        props.deleteCategoty(props.id)
    }
    let changeCat = (e) => {
        console.log('changeCategory '+props.id)
        props.changeCategory(props.id)
    }

    return(
        <li onClick={changeCat} key={props.id}>
            {props.name}
            <button onClick={clickAdd}>Add</button>
            <button onClick={deleteOldCateg}>Delete</button>
            { !!flag && (<FormAddCategory
                            addNewCategory={props.add}
                            inputValue={props.newValue}
                            changeInput={props.changeInput}
                         />
            )}
        </li>
)
}

export default Category
