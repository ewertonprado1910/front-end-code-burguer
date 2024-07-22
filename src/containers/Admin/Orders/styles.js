import styled from "styled-components"
import ReactSelect from "react-select"

export const Container = styled.div `
background: #EFEFEF;
min-height: 100vh;
`
export const ProductsImg = styled.img `
width: 70px;
border-radius: 10px;
`
export const ReactSelectStyle = styled(ReactSelect) `
width: 220px;

.css-13cymwt-control {
    cursor: pointer;
    
}
`
export const Menu = styled.div `
display: flex;
justify-content: center;
gap: 45px;
margin: 20px 0;
`
export const LinkMenu = styled.a `
color: #323D5D;
font-size: 16px;
line-height: 24px;
font-weight: ${props => props.isActiveStatus ? "bold" : "normal"};
border-bottom: ${props => props.isActiveStatus ? "3px solid #9758A6" : "none"};
padding-bottom: 5px;
`