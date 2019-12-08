import React from 'react'
import Item from "./Item";
import t from "./TascList.module.css"

class TaskList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
        }
    }

    render(){
        const {dataCategories, saveItem, items, activeCategory}= this.props
        return (
                <div>
                    <ul className = {t.items}>
                        {items.map((el)=>{
                            if(el.categoryId == activeCategory){
                                return <Item
                                            dataCategories={dataCategories}
                                            key={el.id}
                                            id={el.id}
                                            name={el.name}
                                            isDone={el.isDone}
                                            categoryId={el.categoryId}
                                            saveItem={saveItem}
                                        />
                            }
                        })}
                    </ul>
                </div>
        );
    }

}

export default TaskList