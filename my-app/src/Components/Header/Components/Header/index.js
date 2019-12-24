import React from 'react';
import { connect } from 'react-redux';

import FormAddCategory from '../../../Categories/Components/FormAddCategory'
import { SearchItem } from '../SearchItem'
import { AddItem } from '../AddItem';
import { appendMainCategoryCreater } from '../../../../store/Actions/category-actions';
import { addItemCreater, searchItemCreater } from '../../../../store/Actions/item-actions'

import style from './index.css';

const Header = ({ addMainCategory, items, addNewItem, activeCategory, searchItems }) => {
    return (
        <header className='header'>
            <FormAddCategory addCategory={addMainCategory} parentId={0}/>
            <SearchItem searchItems={searchItems} activeCategory={activeCategory} />
            <AddItem addNewItem={addNewItem} activeCategory={activeCategory}/>
        </header>
    )
}

const mapStateToProps = state => ({
    categories: state.categoriesData.categories,
    items: state.itemsData.items,
    activeCategory: state.categoriesData.activeCategory
})

const mapDispatchToProps = dispatch => ({
    addMainCategory: nameCategory => {
        dispatch(appendMainCategoryCreater(nameCategory))
    },
    addNewItem: dataItem => {
        dispatch(addItemCreater(dataItem))
    },
    searchItems: obj => {
        dispatch(searchItemCreater(obj))
    },
})

export default connect (mapStateToProps, mapDispatchToProps)(Header)