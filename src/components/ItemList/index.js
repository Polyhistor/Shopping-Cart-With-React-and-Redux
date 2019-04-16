import React from 'react';
import ListedItem from "../ListedItem";
import './index.css'

const ItemList = (props) => {
    let itemList = [];
    for(let id in props.itemListing ) {
        let item = props.itemListing[id];
        itemList.push(<ListedItem {...item} addItem={props.addItem} key={item.id}/>);
    }

    return (
        <div className="flex-container">
            {itemList}
        </div>
    );
};

export default ItemList;