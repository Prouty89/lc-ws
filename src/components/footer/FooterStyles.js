import styled from "styled-components";

import Foot from '../../Assets/foot_bottom.JPG';

export const StyledFooter = styled.div`
width: 100%;
color: white;
margin: 0 auto;
height: 100%;
height: 310px;
background-position: right;
background-size: contain;
background-repeat: no-repeat;
background-image: url(${Foot});

bottom: 0;


.footer-container{
    display: flex;
    justify-content: space-between;
    background: linear-gradient(90deg,rgb(35 31 32) 51%,rgba(0,0,0,0.5354516806722689) 65%,rgba(255,0,0,0) 80%);
    background-position: center;
    background-size: cover;
    height: 310px;
}

.links_footer{
    display: flex;
    color: ${props => props.theme.font.linkDark};
    font-family: 'inter', sans-serif;
    font-size: 1.3rem;
    font-weight: bold;
    width: 200px;
    justify-content: space-between;
    margin-left: 45px;
}

.social{
    width: 90px;
    display: flex;
    margin-right: 35px;
    justify-content: space-between;
}


`