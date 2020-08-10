
import styled from "styled-components";


export const StyledLanding = styled.div`

h1{
    margin-top: .5rem;
    display: flex;
    justify-content: center;
    text-decoration: underline;
    padding: 50px;
    padding-bottom: 0px;
}

.landing-logo{
    background: ${props => props.theme.colors.bgBlack};
    padding-right: 0px;
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.col-lg-7{
    padding-right: 0px;
    padding-left: 0px;
}

.mission-statement{
    color: white;
}

.carousel{
    background: #231f20;
}

.services{
    display: flex;
    justify-content: space-evenly;
    margin: 50px;
}

.service{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        width: 400px;
    }
}

`