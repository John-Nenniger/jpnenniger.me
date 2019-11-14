import React from 'react';
import  { NavLink }  from 'react-router-dom';
import MediaQuery from 'react-responsive';

const Header = () => (
    <div className="header">
        <nav className="header__navbar" >
            <NavLink to="/" className="header__navlink" activeClassName="is-active" exact={true}> Blog </NavLink>
            <MediaQuery maxDeviceWidth={ 600 }>
                <NavLink to="/about" className="header__navlink" activeClassName="is-active"> About</NavLink>
            </MediaQuery>
            <NavLink to="/photos" className="header__navlink" activeClassName="is-active"> Photos </NavLink>
        </nav>
    </div>
)

export default Header