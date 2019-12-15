import React, { Component, useState, PureComponent } from 'react'

import Category from "../Category";

import style from './index.module.css'

class CategoriesTree extends React.PureComponent {
    constructor(props){
        super(props)
        console.log('props.categories')
        console.log(props.categories)
        let listCategory = props.categories.filter( el => {
            if (el.parentId === 0) return true
            if ((props.id) && (el.parentId === props.id)) return true
        })
        this.state = {
            categories: listCategory,
            deleteCategory: props.deleteCategory,
            addCategory: props.addCategory,
            changeCategory: props.changeCategory,
            activeCategory: props.activeCategory,
            showListCategories: props.showListCategories,
            allCategories: props.categories
        }
    }
    //const { categories, deleteCategory, addCategory, changeCategory, activeCategory, showListCategories } = props;

    render () {
        return (
            <div className={style.bloc}>
                <ul className={style.category}>
                    { this.state.categories.map( el => {
                        return <Category
                                    key={el.id}
                                    id={el.id}
                                    name={el.name}
                                    parentId={el.parentId}
                                    deleteCategoty={this.state.deleteCategory}
                                    addCategory={this.state.addCategory}
                                    changeCategory={this.state.changeCategory}
                                    activeCategory={this.state.activeCategory}
                                    categories={this.state.categories}
                                    showListCategories={this.state.showListCategories}
                                    allCategories={this.state.allCategories}
                                />
                    })}
                </ul>
            </div>
        )
    };
}

export default CategoriesTree