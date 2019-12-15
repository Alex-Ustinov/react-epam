import React from "react";
import { connect } from "react-redux";

import { saveItemCreater } from '../../store/Actions/item-actions';
import Index from './Components/ItemsList';

const mapStateToProps = state => ({
    items: state.itemsData.items,
    activeCategory: state.categoriesData.activeCategory,
    dataCategories: state.categoriesData.categories
})


const mapStateToDispatch = dispatch => ({
    saveItem: newDataItem => {
        dispatch(saveItemCreater(newDataItem))
    },
})

const ItemsConteiner = connect(mapStateToProps,mapStateToDispatch)(Index)

export default ItemsConteiner