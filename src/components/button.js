import React from "react";
import './button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary','btn--outline'];

const SIZES = ['btn--medium','btn--large'];

const DESTINATIONS = ['/train','/about','/home','/contact','/learn'];


const Button = ({children, type, onClick, buttonStyle, buttonSize, buttonTo}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonStyle) ? buttonStyle : SIZES[0];
    const checkButtonTo = DESTINATIONS.includes(buttonTo) ? buttonTo : DESTINATIONS[0];

    return (
        <Link to={`${checkButtonTo}`} className='btn-mobile'>
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            > 
                {children}
            </button>
        </Link>
    )
};

export default Button;
