import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="vocations">
        <h3>Web Developer,&nbsp;
            Photographer,&nbsp;
            Philosophy Major,&nbsp;
            Climber,&nbsp;
            Snowboarder,&nbsp;           
            <Link to="/writing"> 
                Writer,&nbsp;   
            </Link>
            Gamer,&nbsp;  
            Human
        </h3>
    </div>
)