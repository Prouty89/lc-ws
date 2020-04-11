import styled from "styled-components";


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
    }

    .modal-content{
        font-family: 'Oswald', sans-serif;
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
        justify-content: space-around;
        box-shadow: 2px 0px 6px -6px black;
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
        right: -170px;
        outline: none;
        font-size: 2rem;
        background: none;
        border: none;
        border-bottom: 2px solid black;
        font-weight: bold;
        font-family: 'Cormorant Garamond', serif;  
    }
    
    .tab_inactive{
        position: absolute;
        top: 44px;
        right: 50px;
        outline: none;
        color: ${props => props.theme.font.white};
        background: none;
        border: none;
        font-size: 2rem;
        font-weight: bold;
        font-family: 'Cormorant Garamond', serif;
    }
    .tab_inactive_offer{
        position: absolute;
        top: 44px;
        right: 35px;
        outline: none;
        color: ${props => props.theme.font.white};
        background: none;
        border: none;
        font-size: 2rem;
        font-weight: bold;
        font-family: 'Cormorant Garamond', serif;
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
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    

    p{
      margin-block-start: 0em;
      margin-block-end: 0em;
    }

`