import styled from "styled-components"
import { Button } from "../../components"

export const Container = styled.div `
width: 100vw;
height: 100vh;

display: flex;
`
export const RegisterImg = styled.img `
width: 100%;
height: 100%;
max-width: 50%;
margin-bottom: 100px;
`
export const ContainerRight = styled.div `
background-color:  #373737;

width: 100%;
height: 100%;
max-width: 50%;

display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
gap: 25px;


a {
    color: #fff;
    font-size: 17px;
    &:active {
    opacity: 0.7;
    
}}

`
export const H1 = styled.h1 `
font-weight: 500px;
font-size: 24px;
line-height: 28px;
color: #fff;

`
export const Form = styled.form `
display: flex;
flex-direction: column;
gap: 10px;
width: 100%;
max-width: 350px;

label {
    font-weight: 500px;
    font-size: 14px;
    line-height: 12px;
    color: #fff;
    margin: 1px 0;
}
input {
    width: 100%;
    height: 38px;
    padding: 0 5px;
    border: none;
    border-radius: 5px;

}
`
export const P = styled.p `
font-weight: 400px;
font-size: 18px;
color: #fff;
`
export const StylesButton = styled(Button) `
margin: 0 auto;
`




