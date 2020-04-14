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
    height: 250px;
    background: ${props => props.theme.colors.bgWhite};

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

    .logo-home{
        position: absolute;
        width: 325px;
        top: 30px;
    }

`