import React from 'react';
import  { Link }  from 'react-router-dom';


class AnimatedHeader extends React.Component {

    onClick(e){
        
    }

    render(){
        return (
            <div className="header">
                <div></div>
                <Link onClick={this.onClick} to="/" className="header__navlink" exact={true}> Writing </Link>
                <Link onClick={this.onClick} to="/about" className="header__navlink"> About</Link>
                <Link onClick={this.onClick} to="/photos" className="header__navlink"> Photos </Link>
                <div></div>
            </div>
        )
    }

}

export default AnimatedHeader