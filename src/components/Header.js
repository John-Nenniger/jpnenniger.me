import React from 'react';
import  { NavLink }  from 'react-router-dom';

const Header = () => (
    <nav>
        <NavLink to="/" activeClassName="is-active" exact={true}> Blog </NavLink>
        <NavLink to="/about" activeClassName="is-active"> About</NavLink>
        <NavLink to="/photos" activeClassName="is-active"> Photos </NavLink>
    </nav>
)

export default Header