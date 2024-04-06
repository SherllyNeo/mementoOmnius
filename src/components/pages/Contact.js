import React, { useState } from 'react';
import './Contact.css'


const emailEmoji = <p className='contactDetail'> Email: <i class="fa fa-envelope"></i> </p>
const emailText = <p className='contactDetail'> Email: contact@mementoOmnius.com </p> 


function Contact() {

    const [buttonEmailText, setButtonEmailText] = useState(emailEmoji);
    const changeEmailText = () => setButtonEmailText(emailText)


    return (
        <div className='contact'>
        <div className='contact-box'>
            <button onClick={changeEmailText}>{buttonEmailText}</button> 
        </div>
        </div>
    )
}

export default Contact
