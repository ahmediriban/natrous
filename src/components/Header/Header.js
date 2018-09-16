import React from 'react';


import logo from '../../assets/images/logo-white.png';

const Header =(props)=>(
    <div className="header">
        <div className="header__logo-box">
            <img src={logo} alt="logo" className="header__logo"/>
        </div>

        <div className="header__text-box">
            <h1 className="primary-heading">
                <span className="primary-heading--main">Outdoors</span>
                <span className="primary-heading--sub">is where life happens</span>
            </h1>
            <a href="#" className="btn header__btn--white header__btn--animated">Discover our tours</a>
        </div>


    </div>
);

export default Header;