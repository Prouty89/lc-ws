import styled from "styled-components";


export const StyledFooter = styled.div`
width: 92%;
margin: 0 auto;

height: 105px;

.footer-container{
    display: flex;
    justify-content: space-between;
}

.links_footer{
    display: flex;
    color: ${props => props.theme.font.linkDark};
    font-family: 'inter', sans-serif;
    font-size: 1.3rem;
    font-weight: bold;
    width: 200px;
    justify-content: space-between;
    margin-left: 45px;
}

.social{
    width: 90px;
    display: flex;
    margin-right: 35px;
    justify-content: space-between;
}


`