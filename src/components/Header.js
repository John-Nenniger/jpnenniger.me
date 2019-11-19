import React from 'react';
import  { NavLink }  from 'react-router-dom';
import MediaQuery from 'react-responsive';
const l = console.log

class Header extends React.Component {

    render(){
        return <div className="header">
                    <div></div>
                    <NavLink onClick={this.onClick}to="/" className="header__navlink" activeClassName="is-active" exact={true}> Writing </NavLink>
                    <NavLink onClick={this.onClick}to="/about" className="header__navlink" activeClassName="is-active"> About</NavLink>
                    <NavLink onClick={this.onClick}to="/photos" className="header__navlink" activeClassName="is-active"> Photos </NavLink>
                    <div></div>
                </div>
    }
}

export default Header