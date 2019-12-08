import React,{useState} from 'react'
import FormAddCategory from "../Categories/FormAddCategory";
import ItemAction from "./ItemAction"

const Item = (props) =>{

    const[flag,handler] = useState(false)
    const[ckeckbox,setCheckbox] = useState(props.isDone)

    let openForm = (e) => {
        e.preventDefault()
        handler(!flag)
    }

    return(

        <div>
            <li key={props.id}>
                <input type="checkbox" defaultChecked={ckeckbox}/>
                {props.name}
                <button onClick={openForm}>X</button>
            </li>
            {!!flag && (<ItemAction
                            ckeckbox={ckeckbox}
                            setCheckbox={setCheckbox}
                            flag={flag}
                            dataCategories={props.dataCategories}
                            showForm={handler}
                            id={props.id}
                            name={props.name}
                            isDone={props.isDone}
                            saveItem={props.saveItem}
                            categoryId={props.categoryId}
                         />
            )}
        </div>
    )
}

export default Item
