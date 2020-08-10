import styled from "styled-components";



export const StyledContact = styled.div`
    width: 1000px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    form{
    border-radius: .25rem;
    width: 350px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    }
    button{
        width: 100px;
        margin: 0 auto;
        color: black;
        background-color: #ffffff;
        line-height: .5rem;
        height: 38px;
        border: none;

        &:hover{
            background-color: #c5bfb3;
            color: black;
        }
    }

    .form-contain{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    }

    .details-contain{
        width: 315px;
        p{
            color: white;
        }
    }
`