import styled, { keyframes } from "styled-components";

const border = keyframes`
    0% {
        outline: 2px solid #fffaf5;
        font-size: 1.4rem;
    }
    100%{
        outline: 4px solid #fffaf5;
        font-size: 1.5rem;
    }
`


export const StyledContact = styled.div`
    .contact-container{
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 700px;
    justify-content: center;
    align-items: center;
    width: 92%;
    margin: 0 auto;
    background: ${props => props.theme.colors.bgWhite};

    @media(max-width: 1500px){
        width: 100%;
    }
    }


    .contact-form{
        display: flex;
        flex-direction: column;
        width: 625px;
        box-shadow: black -1px 0px 13px -12px;
        height: 420px;
        background: #242324;
    }


    .input{
        width: 475px;
        height: 50px;
        border-radius: 2px;
        outline: none;
        border: none;
        margin-left: 15px;
        margin-top: 15px;
        font-size: 1.4rem;
        font-family: 'Oswald', sans-serif;

        ::placeholder{
            padding-left: 10px;
        }
    }

    .input_contact{
        width: 475px;
        height: 100px;
        border-radius: 2px;
        outline: none;
        border: none;
        margin-left: 15px;
        margin-top: 15px;
        font-size: 1.4rem;

        ::placeholder{
            padding-left: 10px;
            font-family: 'Oswald', sans-serif;
        }
    }



    .bg{
        margin: 0 auto;
        position: relative;
        height: 446px;
        width: 658px;
        background-color: #fffaf5;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23f2eeeb' fill-opacity='1'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    label{
        outline: none;
    }

    .inputs{
        display: flex;
        flex-direction: column;
        height: 408px;
        align-items: flex-start;
        justify-content: space-between;
    }

    .submit-btn{
        width: 95px;
        background: ${props => props.theme.colors.bgWhite};
        border: none;
        height: 40px;
        margin-top: 15px;
        font-weight: bold;
        font-family: 'Oswald', sans-serif;
        font-size: 1.4rem;
        margin: 0 auto;
        
        &:hover{
            animation-name: ${border};
            animation-timing-function: ease-out;
            animation-duration: 150ms;
            animation-delay: 0s;
            animation-fill-mode: forwards;
        }
    }

    .contact-me{
        font-size: 1.8rem;
        font-family: 'Oswald', sans-serif;
        color: ${props => props.theme.font.black};
        text-align: center;
    }

    .quote{
        font-family: 'inter', sans-serif;
        font-weight: bold;
        font-size: 1.3 rem;
        width: 320px;
        margin-block-start: 1em;
        margin-block-end: .5em;
    }

    .quote-by{
        font-style: italic;
        font-family: 'Cormorant Garamond', serif;
        color: ${props => props.theme.font.linkDark};
        margin-block-start: 0em;
        margin-block-end: 1em;
    }
`