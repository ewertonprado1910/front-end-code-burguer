import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
background: #3C3C3C;
width: 300px;
top: 0;
left: 0;

hr {
   margin: 50px 15px;
}

`
export const ItemContainer = styled.div`
height: 50px;
display: flex;
align-items: center;
background: ${props => props.isActive ? "#565656" : "none"};
border-radius: 8px;
border: 1px solid #3C3C3C;
margin: 0 9px;
padding-left: 20px;

.icon {
    color: #fff;
}
`
export const ListLink = styled(Link)`
font-size: 14px;
line-height: 19px;
color: #fff;
padding-left: 20px;
text-decoration: none;

`
