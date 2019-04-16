import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="ui buttons">
                <button className="ui button">Shop</button>
                <div className="or"></div>
                <button className="ui positive button active"><Link to="/cart">Go To Cart</Link></button>
            </div>
            <h2 className="ui header">
                <i className="settings icon"></i>
                <div className="content">
                    Items List
                    <div className="sub header">Manage your preferences</div>
                </div>
            </h2>
            <br/>
        </div>

    );
};

export default Header;