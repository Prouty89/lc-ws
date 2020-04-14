import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-10px);
    }
    100%{
        opacity: 1;
        transform: translateX(0px);
    }
`

const fill = keyframes`
    0% {
        background-image: linear-gradient(120deg, #f9fcff 0%, #f9fcff 100%);
        background-repeat: no-repeat;
        background-size: 10% 0.09em;
        background-position: 0 100%;
        transition: background-size 0.25s ease-in; 
    }
    100%{
        background-image: linear-gradient(120deg, #f9fcff 0%, #f9fcff 100%);
        background-repeat: no-repeat;
        background-size: 100% 0.09em;
        background-position: 0 100%;
        transition: background-size 0.25s ease-in;
    }
`


export const StyledAbout = styled.div`
    .about-container{
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 644px;
    width: 92%;
    margin: 0 auto;
    @media(max-width: 1500px){
        width: 100%;
    }
    }

    .modal-content{
        font-family: 'Cormorant Garamond', serif; 
        font-weight: bold;
        width: 700px;
        font-size: 1.3rem;
    }

    .info{
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        box-shadow: -2px 2px 6px -6px black;
        background: ${props => props.theme.colors.greyWhite};
        .hero-title{
            position: relative;
        }
    }
    .about-title{
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: flex-end;
        box-shadow: 2px -1px 6px -6px black;
        align-items: center;
        background: ${props => props.theme.colors.bgWhite};
    }

    .designer-name{
        color: ${props => props.theme.font.black};
        font-weight: 500;
        font-size: 4rem;
        line-height: 1;
        font-family: 'Cormorant Garamond', serif;  
    }

    .tab{
        position: absolute;
        top: 75px;
        right: -225px;
        outline: none;
        color: ${props => props.theme.font.linkDark};
        font-size: 3rem;
        animation-name: ${fadeIn};
        animation-duration: 1s;
        background: none;
        font-style: italic;
        border: none;
        font-weight: bold;
        font-family: 'inter', sans-serif;
    }
    
    .tab_inactive{
        position: absolute;
        top: 44px;
        right: 50px;
        outline: none;
        color: ${props => props.theme.font.white};
        background: none;
        border: none;
        cursor: pointer;
        font-size: 2rem;
        font-weight: bold;
        font-family: 'inter', sans-serif;

        &:hover{
            animation-name: ${fill};
            animation-timing-function: ease;
            animation-duration: 400ms;
            animation-delay: 0s;
            animation-fill-mode: forwards;
        }
    }
    .tab_inactive_offer{
        position: absolute;
        top: 44px;
        right: 30px;
        outline: none;
        color: ${props => props.theme.font.white};
        background: none;
        cursor: pointer;
        border: none;
        font-size: 2rem;
        font-weight: bold;
        font-family: 'inter', sans-serif;

        &:hover{
            animation-name: ${fill};
            animation-timing-function: ease;
            animation-duration: 400ms;
            animation-delay: 0s;
            animation-fill-mode: forwards;
        }
    }

    .img-container{
        width: 200px;
        height: 125px;
        box-shadow: black 0px 0px 7px -3px;
        right: 15px;
        border-radius: 6px;
        img{
            width: 200px;
            border-radius: 6px;
        }
    }

    .img-container_inactive{
        position: relative;
        width: 200px;
        height: 125px;
        box-shadow: black 0px 0px 7px -3px;
        border-radius: 6px;

        img{
            width: 200px;
            filter: brightness(0.35);
            border-radius: 6px;
        }
    }

    .images{
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        margin-right: 15px;
        justify-content: space-evenly;
    }
    

    p{
      margin-block-start: 0em;
      margin-block-end: 0em;
    }

`