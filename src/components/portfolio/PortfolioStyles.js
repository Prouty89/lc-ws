import styled from "styled-components";


export const StyledPortfolio = styled.div`
    width: 92%;
    margin: 0 auto;
    height: 100vh;
    background: ${props => props.theme.colors.bgWhite};
    
    ul{
        display: flex;
        margin-block-start: 0em;
        margin-block-end: 0em;
        padding-top: 95px;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 50px;

        li{
            list-style: none;
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