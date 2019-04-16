import React from 'react';
import CartItem from '../CartItem';
import {Link, Redirect} from 'react-router-dom';

const Cart = (props) => {
    let count = 0;
    let total = 0;
    props.shoppingCart.forEach((item) => {
        count += item.quantity
        total += item.price*item.quantity;
    });

    return (
        <div style={{ padding: '20px'}} className="container">
            <div className="ui grid">
                    <div className="four wide column"></div>
                    <div className="six wide column">
                            <div className="cartHeader">
                                <Link to="/" className="backButton"><i className="big olive arrow alternate circle left icon"></i></Link>
                                <span className="cartHeading">Current orders in the cart</span>
                            </div>
                            <div style={{ padding: '20px'}} className="ui center aligned three column grid">
                                <div className="four wide column">Items ({count})</div>
                                <div className="four wide column">Qty</div>
                                <div className="four wide column">Price</div>
                                <div className="four wide column">Remove</div>
                            </div>
                            <div className="cardTable">
                                {
                                    props.shoppingCart.map(item => <CartItem incrementItem={props.incrementItem} decrementItem={props.decrementItem} removeItem={props.removeItem} changeItem={props.changeItem} {...item}/>)
                                }
                            </div>
                    </div>
                    <div className="three wide column">
                    <div className="row"></div>
                        <div className="ui cards">
                            <div className="card">
                                <div className="content">
                                <div className="header">Total</div>
                                <div className="description">
                                    <span>Items ({count}) : ${total}</span>
                                </div>
                                </div>
                                <div className="ui bottom attached button">
                                    Checkout
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="two wide column"></div>
            </div>
        </div>
    );
};

export default Cart;