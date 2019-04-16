import React from 'react';

const CartItem = (props) => {
    console.log(props)
    return (

        <div style= {{ textAlign : 'center' }} className="ui grid">
            <div className="four wide column olive column">{props.name}</div>
            <div className="four wide column ">{props.quantity}</div>
            <div className="four wide column ">${props.quantity*props.price}</div>
            <div className="four wide column "><span style= {{ cursor: 'pointer' }} onClick={() => props.removeItem(props.id)}><i className="large close link icon"></i></span></div>
        </div>
     
    )
};

export default CartItem;