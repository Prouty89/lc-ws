import styled from "styled-components";


export const StyledHome = styled.div`
    
    .home-container{
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 90%;
    margin: 0 auto;
    }

    .nav{
        position: absolute;
        top: 0;
        left: 0;
        ul{
            display: flex;
        }
        li{
            list-style: none;
            font-family: 'inter', sans-serif;
            color: ${props => props.theme.font.linkDark};
            font-size: 1.5rem;
            font-weight: bold;
        }
    }

    .social{
        position: absolute;
        top:15px;
        right: 0;
        width: 100px;
        margin-right: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    .info{
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        background: ${props => props.theme.colors.green};
        box-shadow: 0px 45px 0px #6b7c67;
        z-index: 1;

        .hero-title{
            position: relative;
        }

        .number{
        color: ${props => props.theme.font.peach};
        font-family: 'inter', sans-serif;
        font-weight: 500;
        font-size: 1rem;
        }
    }

    .logo{
        position: absolute;
        bottom: 52px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        z-index: 2;
        height: 170px;
        background: ${props => props.theme.colors.greyWhite};
        
        img{
            padding: 15px;
        }
    }
    .logo-1{
        width: 525px;
    }

    .interior-design{
        position: absolute;
        bottom: 90px;
        right: 55px;
        font-size: 2.3rem;
        font-family: 'inter', sans-serif;
        color: ${props => props.theme.font.peach};
    }

    .img-container{
        display: flex;
        justify-content: flex-start;
    }
    

    p{
      margin-block-start: 0em;
      margin-block-end: 0em;  
    }

`