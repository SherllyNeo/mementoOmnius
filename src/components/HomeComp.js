import React from 'react';
import Button from './button.js';
import '../App.css';
import './HomeComp.css';


function HomeComp() {
    return (
        <div className='hero-container'>
        <h1> Remember all </h1>
        <p> Learn how to become superhuman  </p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' buttonTo='/learn'>
                Learn about memory techniques
            </Button>
        </div>

        </div>
    )
}

export default HomeComp
