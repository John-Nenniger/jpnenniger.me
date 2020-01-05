import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="vocations">
        <h3>Web Developer,&nbsp;  
            <Link to="/photos">
                Photographer,&nbsp;      
            </Link>
            Philosophy Major,&nbsp;     
            Climber,&nbsp;       
            Snowboarder,&nbsp;           
            <Link to="/"> 
                Writer,&nbsp;   
            </Link>
            Gamer,&nbsp;  
            Human
        </h3>
    </div>
)