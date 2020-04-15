import styled, { keyframes } from "styled-components";

const fill = keyframes`
    0% {
        background-image: linear-gradient(120deg, #3d4839 0%, #3d4839 100%);
        background-repeat: no-repeat;
        background-size: 10% 0.09em;
        background-position: 0 100%;
        transition: background-size 0.25s ease-in; 
    }
    100%{
        background-image: linear-gradient(120deg, #3d4839 0%, #3d4839 100%);
        background-repeat: no-repeat;
        background-size: 100% 0.09em;
        background-position: 0 100%;
        transition: background-size 0.25s ease-in;
    }
`




export const StyledPortfolio = styled.div`
    width: 92%;
    margin: 0 auto;
    
    background: ${props => props.theme.colors.bgWhite};

    .residential-container{
        min-height: 1000px;
        display: flex;
        align-content: center;
        justify-content: center;
        
    }

    .portfolio-nav{
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    
    ul{
        display: flex;
        margin-block-start: 0em;
        margin-block-end: 0em;
        padding-top: 95px;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 50px;

        .residential{
            list-style: none;
            font-size: 3rem;
            
        }

        .commercial{
            list-style: none;
            font-size: 3rem;
        }

        .home{
            margin-right: 10px;
        }
        .selected-link{
            text-decoration: none;
            color: ${props => props.theme.font.linkDark};
            color: black;
            font-family: 'Oswald', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: linear-gradient(120deg, #3d4839 0%, #3d4839 100%);
            background-repeat: no-repeat;
            background-size: 100% 0.09em;
            background-position: 0 100%;
        }

        .unselected-link{
            text-decoration: none;
            color: ${props => props.theme.font.peach};
            color: black;
            display: flex;
            justify-content: center;
            font-family: 'Oswald', sans-serif;
            align-items: center;

            &:hover{
                animation-name: ${fill};
                animation-timing-function: ease;
                animation-duration: 400ms;
                animation-delay: 0s;
                animation-fill-mode: forwards;
            }

            li{
            list-style: none;
            text-decoration: none;
            font-family: 'Oswald', sans-serif;
            font-size: 3rem;
            cursor: pointer;
            margin-right: 10px;
            }
        }
        .slash{
            list-style: none;
            margin-left: 20px;
            padding-right: 20px;
            font-family: 'Oswald', sans-serif;
            font-size: 3rem;
            margin-right: 10px;
        }
    }

    .portrait-container{
        display: flex;
        max-width: 1150px;
        padding-top: 50px;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 0 auto;
        align-items: center;

        img{
            margin: 0 auto;
        }
    }

    .image{
        box-shadow: -1px 1px 4px 0px black;
        border-radius: 3px;
    }

    .portrait{
        width: 365px;
        
        height: 530px;
    }

    .portrait_1{
        width: 365px;
       
        height: 530px;
    }
    .landscape{
        height: 365px;
       
        width: 530px;
    }

    .logo-home{
        position: absolute;
        width: 325px;
        top: 30px;
    }

`