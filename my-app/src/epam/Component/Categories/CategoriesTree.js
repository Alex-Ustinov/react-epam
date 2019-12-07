import React from 'react'
import style from '../Button.css'
import Category from "./Category";
import ListCaterories from "./CategoriesConteiner"
import FormAddCategory from "./FormAddCategory"
/*
const CategoriesTree = (props) => {
    console.log('props!!!!')
    console.log(props)

    let listCategories = props.categories.map((el)=>{
        return <Category name={el.name} add={props.addCategory}/>
    })


    return(
        <div>
            <ul>
                {listCategories}
            </ul>
        </div>
    )
}
export default CategoriesTree
*/
class CategoriesTree extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
        }
    }

    render(){
        console.log(this.props.categories)
        return <div>
            <ul>
                {this.props.categories.map((el)=>{
                        return <Category id={el.id} name={el.name} deleteCategoty = {this.props.deleteCategory} add={this.props.addCategory} newValue = {this.props.nameNewCategory} changeInput={this.props.onNewCategoryChange}/>
                    })}
            </ul>
        </div>
    }

}
export default CategoriesTree