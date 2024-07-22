import styled from "styled-components"

export const Container = styled.div`
background-color: #fff;
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

export const ImageOffers = styled.img`
`
export const ContainerOffers = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
export const Img = styled.img`
width: 200px;
border-radius: 10px;

p {
    font-style: normal;
    font-size: 17px;
    font-weight: 700px;
    line-height: 20px;
    color: #424242;
    font-family: Source Sans Pro sans-serif;
}
`
export const Button = styled.button`
background-color: #9758A6;
color: #FFFFFF;
font-weight: 700px;
font-size: 16px;
line-height: 24px;
align-items: center;
height: 40px;
border-radius: 8px;
border: none;

&:hover {
    opacity: 0.8;
    transition: 1s;
}
&:active {
    opacity: 0.1;
}
`