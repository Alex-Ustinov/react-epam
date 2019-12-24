import React, { Component } from 'react';

import style from './index.css';

class SearchSuggestion extends React.Component{

    constructor (props) {
        super(props)

        let allNameItems = {}
        for (let j=0;j<props.items.length;j++) {
            let eachName = props.items[j].name
            let eachId = props.items[j].id
            allNameItems[eachName] = eachId
        }

        this.state = {
            items: props.items,
            suggestions: [],
            text: '',
            idCaterory: 0,
            allNameItems: allNameItems
        }
    }

    onTextChanged = e => {
        const value = e.target.value
        if (value.length === 0) {
            this.setState(() => ({
                suggestions: [],
                text: value,
            }))
        } else {
            var dataSercing = Object.keys(this.state.allNameItems)
            const regex = new RegExp(`^${value}`,'i')
            const suggestions = dataSercing.sort().filter(v=>regex.test(v))
            this.setState(()=>({ suggestions: suggestions, text: value }))
        }

    }

    suggestionSelected = value => {
        let findName = this.state.suggestions[0]
        if (this.state.allNameItems[findName]) {
            this.props.changeCategory(this.state.allNameItems[findName])
        }
        this.setState(()=>({
            text: value,
            suggestions: [],
        }))
    }

    render() {
        return (
            <div className="search">
                <input  placeholder="Введите название Item"  value={this.state.text} onChange={this.onTextChanged} type="text"/>
                <ul>
                    {this.state.suggestions.map((item,i) => <li className="item_name" key={i} onClick={()=>(this.suggestionSelected(item))}>{item}</li>)}
                </ul>
            </div>

        )
    }
}

export default SearchSuggestion;