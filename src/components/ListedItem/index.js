import React from 'react';

const ListedItem = (props) => {
    return (
        <div className="ui link cards">
            <div className="card">
                <div className="image">
                </div>
                <div className="content">
                <div className="header">{props.name}</div>
                <div className="meta">
                    <p>{props.name}</p>
                </div>
                <div className="description">
                </div>
                </div>
                <div className="extra content">
                    <span className="right floated">
                        <div className="ui vertical animated button" tabIndex="0">
                            <div onClick = {() => props.addItem(props.id)} className="hidden content">Shop</div>
                            <div className="visible content">
                                <i className="shop icon"></i>
                            </div>
                        </div>
                    </span>
                    <span>
                        <i className="dollar sign icon"></i>
                        {props.price}
                    </span>
                </div>
            </div>
        </div>
    )
};

export default ListedItem;