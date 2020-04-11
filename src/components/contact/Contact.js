import React from 'react';
import {StyledContact} from './ContactStyles';


const Contact = () => {
    return (
        <StyledContact>
            <div className="bg">
            <form className="contact-form">
                <div className="inputs">
                    <input
                    className="input"
                    name="name"
                    placeholder="Name"
                    id="name"
                    type="text"
                    />
                        <label
                        className="name"
                        htmlFor="name"
                        >
                    
                        </label>
                    
                    <input
                    className="input"
                    name="email"
                    placeholder="Email"
                    id="email"
                    type="text"
                    />
                        <label
                        className="email"
                        htmlFor="email"
                        >
                        
                        </label>
                    
                    <input
                    className="input"
                    name="message"
                    placeholder="Note"
                    id="message"
                    type="textArea"
                    />
                    <label
                        className="message"
                        htmlFor="message"
                        >
                        
                    </label>
                    <button className="submit-btn" type="submit">
                        Submit
                    </button>
                </div>
            </form>
            </div>
        </StyledContact>
    )
}

export default Contact;