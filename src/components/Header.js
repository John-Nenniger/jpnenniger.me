import React from 'react';
import  { NavLink }  from 'react-router-dom';
import MediaQuery from 'react-responsive';

const Header = () => (
    <div className="header">
        <div></div>
        <NavLink to="/" className="header__navlink" activeClassName="is-active" exact={true}> Writing </NavLink>
        <NavLink to="/about" className="header__navlink" activeClassName="is-active"> About</NavLink>
        <NavLink to="/photos" className="header__navlink" activeClassName="is-active"> Photos </NavLink>
        <div></div>
    </div>
)

export default Header