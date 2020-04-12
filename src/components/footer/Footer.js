import React from 'react';
import {StyledFooter} from './FooterStyles';



const Footer = () => {
    return (
        <StyledFooter>
           
            <div className="footer-container">
                <div className="links_footer">
                <p className="link">
                    Account
                </p>
                <p className="link">
                    Portfolio
                </p>
                </div> 
                <div className="social">
                    <a href="www.facebook.com" target="__blank">
                        <img className="facebook" src="https://img.icons8.com/ios/40/3d4839/facebook-new.png" alt="facebook"/>
                    </a>
                    <a href="www.facebook.com" target="__blank">
                        <img className="insta" src="https://img.icons8.com/ios/40/3d4839/instagram-new.png" alt="instagram"/>
                    </a>
                    </div>
            </div> 
        </StyledFooter>
    )
}

export default Footer;