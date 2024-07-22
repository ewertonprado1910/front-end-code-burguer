import styled from "styled-components"

export const ContainerButton = styled.button `
width: 182px;
height: 39px;
margin-top: 35px;
border: none;
border-radius: 20px;
background-color: #9758A6;
font-style: normal;
font-weight: 500px;
font-size: 16px;
line-height: 17px;
align-items: center;
color: #fff;

&:hover
{
    transition: 1s;
    opacity: 0.7;
}
&:active
{
    opacity: 0.3;
}

`