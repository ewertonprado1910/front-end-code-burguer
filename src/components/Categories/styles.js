import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
background-color: #efefef;
display: flex;
flex-direction: column;
align-items: center;
padding: 35px 0;
gap: 25px;

.rec.rec-arrow {
    background-color: #9758A6;
    color: #efefef;
    box-shadow: 0 0 10px #9758A6;
}
.rec.rec-arrow:hover {
    border: 2px solid #9758A6;
    background-color: #efefef;
    color: #9758A6;
   
}
.rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;

}
`
export const ImageCategory = styled.img`
`
export const ContainerCategories = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
export const Img = styled.img`
width: 200px;
border-radius: 10px;
`
export const Button = styled(Link)`
background-color: #9758A6;
color: #FFFFFF;
font-weight: 700px;
font-size: 16px;
line-height: 24px;
height: 40px;
border-radius: 8px;
border: none;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;

&:hover {
    opacity: 0.8;
    transition: 1s;
}
&:active {
    opacity: 0.1;
}
`