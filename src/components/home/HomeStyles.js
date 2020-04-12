import styled from "styled-components";


export const StyledHome = styled.div`
    
    .home-container{
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 92%;
    margin: 0 auto;
    position relative;
    }

    .nav{
        position: absolute;
        top: 0;
        left: 0;

        a{
            text-decoration: none;
        }
        ul{
            display: flex;
        }
        li{
            list-style: none;
            font-family: 'inter', sans-serif;
            color: ${props => props.theme.font.linkDark};
            font-size: 1.5rem;
            margin-right: 15px;
            margin-top: 10px;
            font-weight: bold;
            cursor: pointer;
        }
    }

    .social{
        position: absolute;
        top:25px;
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
        box-shadow: 0px 30px 0px #6b7c67;
        z-index: 3;
        

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
        bottom: -50px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        font-family: 'Oswald', sans-serif;
        
        font-size: 1.1rem;
        align-items: center;
        width: 400px;
        z-index: 3;
        left: -4px;
        height: 140px;
        box-shadow: black 1px -2px 6px -2px;
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
        z-index: 4;
        justify-content: flex-start;
        box-shadow: -2px -1px 19px -10px black;
    }

    .number{
        text-align: left;
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        margin-left: 45px;
        color: ${props => props.theme.font.linkDark};

        img{
            padding: 5px;
            padding-bottom: 0px;
            padding-left: 0px;
            padding-right: 10px;
        }
    }

    .email{
        color: ${props => props.theme.font.linkDark};
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        width: 100%;
        margin-left: 35px;

        img{
            padding: 7px;
            padding-bottom: 0px;
            padding-right: 15px;
        }
    }
    

    p{
      margin-block-start: 0em;
      margin-block-end: 0em;  
    }

`