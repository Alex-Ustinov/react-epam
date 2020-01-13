import React from 'react';
import { connect } from 'react-redux';

import FormAddCategory from '../Categories/Components/FormAddCategory';
import { SearchItem } from './Components/SearchItem';
import { AddItem } from './Components/AddItem';
import { SearchIsDoneItem } from './Components/SearchIsDone';
import { appendMainCategoryCreater } from '../../store/Actions/category-actions';
import { addItemCreater, searchItemCreater, searchIsDoneItemCreater } from '../../store/Actions/item-actions';

import style from './index.css';

const Header = ({ addMainCategory, addNewItem, activeCategory, searchItems, searchIsDone, isDoneSearch }) => (
    <header className='header'>
        <FormAddCategory addCategory={addMainCategory} parentId={0} />
        <SearchIsDoneItem activeCategory={activeCategory} searchIsDone={searchIsDone} isDoneSearch={isDoneSearch} />
        <SearchItem searchItems={searchItems} activeCategory={activeCategory} />
        <AddItem addNewItem={addNewItem} activeCategory={activeCategory} />
    </header>
)

const mapStateToProps = state => ({
    categories: state.categoriesData.categories,
    items: state.itemsData.items,
    activeCategory: state.categoriesData.activeCategory,
    isDoneSearch: state.itemsData.isDoneSearch,
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
    searchIsDone: stateSearch => {
        dispatch(searchIsDoneItemCreater(stateSearch))
    },
})

export default connect (mapStateToProps, mapDispatchToProps)(Header)