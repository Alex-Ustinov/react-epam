import React from 'react';
import { connect } from 'react-redux';

import { saveItemCreater } from '../../store/Actions/item-actions';
import Item from './Components/Item';

import style from './index.css';

const ItemsList = ({ dataCategories, saveItem, items, activeCategory, isDoneSearch }) => (
    <div>
        <ul className="items">
            {items.filter(el => ((el.categoryId === activeCategory && (el.show) && ((el.isDone) || ((!el.isDone) && (!isDoneSearch))))
            )).map(elm => (
                <Item
                    dataCategories={dataCategories}
                    {...elm}
                    key={elm.id}
                    saveItem={saveItem}
                />
            ))}
        </ul>
    </div>
);
const mapStateToProps = state => ({
    items: state.itemsData.items,
    activeCategory: state.categoriesData.activeCategory,
    dataCategories: state.categoriesData.categories,
    isDoneSearch: state.itemsData.isDoneSearch
});

const mapStateToDispatch = dispatch => ({
    saveItem: newDataItem => {
        dispatch(saveItemCreater(newDataItem))
    },
});

export default connect(mapStateToProps,mapStateToDispatch)(ItemsList)
