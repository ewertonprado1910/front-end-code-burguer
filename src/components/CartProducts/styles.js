import styled from "styled-components"

export const Container = styled.div `
background-color: #FFFFFF;
border-radius: 30px;
display: flex;
gap: 12px;
padding: 16px;
width: max-content;

div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
`
export const Image = styled.img `
width: 150px;
`
export const ProductName = styled.p `
font-weight: 400px;
font-style: normal;
font-size: 16px;
line-height: 18px;
color: #000000;
`
export const ProductPrice = styled.p `
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 21px;
margin-bottom: -70px;

color: #000000;


`
