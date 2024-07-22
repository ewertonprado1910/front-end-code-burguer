import styled from "styled-components"

export const Container = styled.div`
background: #fff;
border-radius: 20px;
width: max-content;
padding: 20px;
`
export const Header = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
padding: 10px;
border-bottom: 1px solid #b5b5b5;

p {
    font-size: 16px;
    line-height: 19px;
    color: #9a9a9d;
}

`
export const Body = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
width: max-content;
grid-gap: 10px 15px;
margin-top: 20px;

img {
    border-radius: 10px;
    width: 150px;
}

p {
    font-size: 16px;
    color: #000000;
}

div {
    display: flex;
    gap: 20px;

    button {
        height: 30px;
        background: transparent;
        border: none;
        font-size: 28px;

        &:hover {
            opacity: 0.7;
            text-shadow: 1px 1px 5px #9758A6;

        }
    }
    p {
        margin-top: 5px;
    }
}
`
export const PriceTotal = styled.p`
font-size: 18px;
font-weight: bold;


`
export const Price = styled.p`
font-size: 18px;
font-weight: bold;
`
export const EmptyCart = styled.p`
display: flex;
justify-content: center;
font-size: 19px;
font-weight: bold;
text-align: center;
padding: 60px;
color: #9758A6;

p {
    margin-top: 5px;
}

img {
    padding: 5px;
}
`
export const DeleteButton = styled.button`
width: 25px;
background: transparent;
border: none;

&:hover {
    opacity: 0.9;
    color: #9758A6;
}
&:active {
    opacity: 0.4;
}
    img {
    width: 25px;
    margin-left: 130px;
}
`
