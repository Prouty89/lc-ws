import styled from "styled-components";


export const StyledContact = styled.div`
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;


    .contact-form{
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 400px;
        background: ${props => props.theme.colors.greyWhite};
    }

    .input{
        width: 225px;
        margin: 0 auto;
        outline: none;
        border: none;
    }

    label{
        outline: none;
    }

    .submit-btn{
        width: 75px;
        margin: 0 auto;
    }
`