import React from 'react'
import { Link } from 'react-router-dom'
import Vocations from './Vocations'


export default () => (
    <div className="blurb">
        <Link to="/about">
            <h1 className="blurb__name"> 
                Jack Nenniger 
            </h1>
        </Link>
        <Vocations />
    </div>
)