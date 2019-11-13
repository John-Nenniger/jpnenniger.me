import React from 'react';
import  { NavLink }  from 'react-router-dom';

const Header = () => (
    <nav className="navbar fixed hover-bg-black:hover" >
        <NavLink to="/" className="navlink" activeClassName="is-active" exact={true}> Blog </NavLink>
        <NavLink to="/about" className="navlink" activeClassName="is-active"> About</NavLink>
        <NavLink to="/photos" className="navlink" activeClassName="is-active"> Photos </NavLink>
    </nav>
)

export default Header