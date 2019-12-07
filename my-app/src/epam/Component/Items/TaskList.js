import React from 'react'
import Item from "./Item";

class TaskList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
        }
    }

    render(){
        console.log(this.props)
        return <div>
            <ul>
                {this.props.items.map((el)=>{
                    if(el.categoryId == this.props.activeCategory){
                        return <Item name={el.name} isDone={el.isDone} categoryId={el.categoryId} />
                    }
                })}
            </ul>
        </div>
    }

}
export default TaskList