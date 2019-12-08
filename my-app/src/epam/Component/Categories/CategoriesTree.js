import React from 'react'
import Category from "./Category";
import { Component } from 'react'
import c from './CategoriesTree.module.css'

class CategoriesTree extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
        }
    }

    render(){
        const { categories, deleteCategory, nameNewCategory, onNewCategoryChange, addCategory, changeCategory } = this.props;
        return (
                <div className={c.bloc}>
                    <ul className={c.category}>
                        {categories.map((el)=>{
                                return <Category
                                            key={el.id}
                                            id={el.id}
                                            name={el.name}
                                            parentId = {el.parentId}
                                            deleteCategoty={deleteCategory}
                                            add={addCategory}
                                            newValue={nameNewCategory}
                                            changeInput={onNewCategoryChange}
                                            changeCategory={changeCategory}
                                        />
                        })}
                    </ul>
                </div>
        );
    }

}

export default CategoriesTree