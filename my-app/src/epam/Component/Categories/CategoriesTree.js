import React from 'react'
import Category from "./Category";

class CategoriesTree extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
        }
    }

    render(){
        return <div>
            <ul>
                {this.props.categories.map((el)=>{
                        return <Category id={el.id} name={el.name} deleteCategoty = {this.props.deleteCategory} add={this.props.addCategory} newValue = {this.props.nameNewCategory} changeInput={this.props.onNewCategoryChange} changeCategory= {this.props.changeCategory}/>
                })}
            </ul>
        </div>
    }

}
export default CategoriesTree