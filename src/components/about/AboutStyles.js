import styled from "styled-components";


export const StyledAbout = styled.div`

    
    .about-container{
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 644px;
    width: 90%;
    margin: 0 auto;
    }

    .about{
        font-family: 'Oswald', sans-serif;
        width: 700px;
        font-size: 1.3rem;
    }

    .info{
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        background: ${props => props.theme.colors.greyWhite};
        .tab_1{
            position: absolute;
            top: 165px;
            left: 0;
            font-size: 2rem;
            font-weight: bold;
            font-family: 'Cormorant Garamond', serif;  
        }
        .tab_2{
            position: absolute;
            top: 310px;
            left: 0;
            font-size: 2rem;
            font-weight: bold;
            font-family: 'Cormorant Garamond', serif;  
        }
        .tab_3{
            position: absolute;
            top: 460px;
            left: 0;
            font-size: 2rem;
            font-weight: bold;
            font-family: 'Cormorant Garamond', serif;  
        }
        .hero-title{
            position: relative;
        }
    }
    .about-title{
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;

    }

    .designer-name{
        color: ${props => props.theme.font.black};
        font-weight: 500;
        font-size: 4rem;
        line-height: 1;
        font-family: 'Cormorant Garamond', serif;  
    }

    .img-container_1{
        position: absolute;
        top: 125px;
        width: 200px;
        height: 125px;
        overflow: hidden;
        box-shadow: black 0px 0px 7px -1px;
        right: 10px;
        border-radius: 6px;

        img{
           width: 210px;
            box-shadow: black 0px 0px 7px -1px;
         
        }
    }

    .img-container_2{
        position: absolute;
        top: 275px;
        width: 200px;
        height: 125px;
        overflow: hidden;
        box-shadow: black 0px 0px 7px -1px;
        right: 10px;
        border-radius: 6px;

        img{
            width: 210px;
            box-shadow: black 0px 0px 7px -1px;
        }
    }

    .img-container_3{
        position: absolute;
        top: 425px;
        width: 200px;
        height: 125px;
        overflow: hidden;
        box-shadow: black 0px 0px 7px -1px;
        right: 10px;
        border-radius: 6px;

        img{
            width: 210px;
            box-shadow: black 0px 0px 7px -1px;
        }
    }
    

    p{
      margin-block-start: 0em;
      margin-block-end: 0em;
    }

`