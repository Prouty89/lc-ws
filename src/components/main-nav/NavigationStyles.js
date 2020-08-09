import styled from "styled-components";

export const StyledNavigation = styled.div`

    .navbar{
        display: flex;
        justify-content: space-between;
        background: #231f20b3;
        padding: .5rem 3rem;
    }
    .nav-tabs{
        background: ${props => props.theme.colors.bgBlack};
        border-bottom: none;
        padding-bottom: 5px;

        a{
            color: white;
        }
    }

    .nav-link{
        border: none;
        color: white;

        &:hover{
        border: none;
        padding: .5rem 1rem;
        }
    }

`