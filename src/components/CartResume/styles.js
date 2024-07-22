import styled from "styled-components"

export const Container = styled.div`
width: 315px;
background-color: #fff;
border-radius: 20px;
padding: 10px;
display: flex;
justify-content: space-between;
flex-direction: column;

.container-top {
grid-gap: 10px 15px;
display: grid;
justify-content: space-between;
grid-template-areas: 

"title title"
"items items-price"
"delivery-tex price-tax";

.title {
    grid-area: title;
    margin-bottom: 20px;
    text-align: center;
}
.items {
    grid-area: items;
    
}
.items-price {
    grid-area: items-price;
}
.delivery-tex {
    grid-area: delivery-tex;
}
.price-tex {
    grid-area: price-tex;
}

}

.container-botton {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: bold;
    font-size: 20px;
    margin-top: 60px;
}
`




