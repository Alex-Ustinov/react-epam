import React from 'react';
import { connect } from 'react-redux';

import { saveItemCreater } from '../../../../store/Actions/item-actions';
import Item from '../Item';

import style from './index.css';

const ItemsList = ({ dataCategories, saveItem, items, activeCategory }) => (
    <div>
        <ul className="items">
            {items.map(el => {
                if (el.categoryId == activeCategory && (el.show)) {
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

export default connect(mapStateToProps,mapStateToDispatch)(ItemsList)
