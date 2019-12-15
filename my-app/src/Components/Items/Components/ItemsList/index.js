import React from 'react';

import Item from "../Item";

import style from "./index.module.css";

const ItemsList = ({ dataCategories, saveItem, items, activeCategory }) => (
    <div>
        <ul className = {style.items}>
            {items.map( el => {
                if (el.categoryId == activeCategory) {
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

export default ItemsList