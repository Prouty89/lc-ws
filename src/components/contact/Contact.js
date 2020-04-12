import React from 'react';
import {StyledContact} from './ContactStyles';


const Contact = () => {
    return (
        <StyledContact>
            <div className="contact-container">
                <h1 className="contact-me"> Contact Me</h1>
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
                    name="phone"
                    placeholder="Phone #"
                    id="phone"
                    type="text"
                    />
                    <label
                    className="phone"
                    htmlFor="phone"
                    >
                    
                    </label>
                    
                    <textarea
                    className="input_contact"
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
            </div>
            <div className="reviews">
                <p className="quote">
                    Working with Lindsey was a dream, 
                    her attention to detail and explanation 
                    of everything in my home was impeccable.
                </p>
                <h1 className="quote-by">Santa Claus</h1>
                <p className="quote">
                    Working with Lindsey was a dream, 
                    her attention to detail and explanation 
                    of everything in my home was impeccable.
                </p>
                <h1 className="quote-by">Santa Claus</h1>
            </div>
        </StyledContact>
    )
}

export default Contact;