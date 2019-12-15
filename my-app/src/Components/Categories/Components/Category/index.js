import React,{ useState } from 'react';

import FormAddCategory from '../FormAddCategory';
import CategoriesTree from '../CategoriesTree';

const Category = props => {
    const [ flag, showFormAddCategory ] = useState(false)
    const { allCategories, categories, deleteCategoty, changeCategory, id, addCategory, changeInput, parentId, name, activeCategory, showListCategories } = props

    let clickAdd = () => {
        showFormAddCategory(true)
    }
    let deleteOldCateg = () => {
        deleteCategoty(id)
    }
    let changeCat = () => {
        changeCategory(id)
    }

    const [ subCategory, showSubCategories] = useState([])

    let show = () => {
        if ((allCategories) && allCategories.length > 0) {
            let arrSubCategoties = allCategories.filter(el => {
                if (el.parentId === id) {
                    return true
                }
            })
            showSubCategories(arrSubCategoties)
        }
        // (id === activeCategory) &&
    }

    return (
        <div>
            <li onClick={changeCat}>
                <button onClick={show}>V</button>
                { name }
                <button onClick={clickAdd}>Add</button>
                <button onClick={deleteOldCateg}>Delete</button>
                { flag && (<FormAddCategory
                            addCategory={addCategory}
                            parentId={id}
                            flag={flag}
                            showFormAddCategory={showFormAddCategory}
                           />
                )}
            </li>
            {subCategory.length > 0 ? <CategoriesTree
                                        categories={subCategory}
                                        deleteCategoty={deleteCategoty}
                                        id={id}
                                        addCategory={addCategory}
                                        showFormAddCategory={showFormAddCategory}
                                        changeCategory={changeCategory}
                                        activeCategory={activeCategory}
                                      /> : ''}
         </div>
    )
}

export default Category
