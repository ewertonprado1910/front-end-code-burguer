import styled from "styled-components"

export const Container = styled.div`
height: 70px;
background-color: #fff;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-around;

`
export const ContainerLeft = styled.div`
display: flex;
gap: 25px;

`
export const LinkPage = styled.a`
color: ${props => props.isActive ? "#9758A6" : "#555555 " };
font-weight: ${props => props.isActive ? "bold" : "#555555 " };
font-size: 16px;
line-height: 19px;

`
export const ContainerRigth = styled.div`
display: flex;
align-items: center;
gap: 25px;
;

`
export const Line = styled.div`
height: 40px;
border: 1px solid #9758A6 ;

`

export const ContainerText = styled.div`
p {
    font-size: 15px;
    line-height: 19px;
    color: #555555;
}

`
export const LinkPageExit = styled.a`
font-weight: bold;
font-size: 16px;
line-height: 16px;
color: #9758A6;
`


