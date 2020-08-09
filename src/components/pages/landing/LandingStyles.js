
import styled from "styled-components";


export const StyledLanding = styled.div`


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

.blurb{
    width: 500px;
    margin: 0 auto;
    text-align: center;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    margin-top: 50px;
    margin-bottom: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 2rem;
    font-style: oblique;
}
`