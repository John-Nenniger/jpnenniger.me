import React from 'react';
import { Link } from 'react-router-dom';



export default () => (
    <div className="vocations">
        <h3> Web Developer, 
            <Link to="/photos">
                Photographer,  
            </Link>
            Philosophy Major, 
            Climber,  
            Snowboarder,  
            <Link to="/"> 
                Writer,  
            </Link>
            Gamer, 
            Human
        </h3>
    </div>
)