import styled from "styled-components"
import { Button } from "../../../components/Button"


export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export const Form = styled.form`
background: #3C3C3C;
border-radius: 5px;
display: flex;
flex-direction: column;
gap: 20px;
padding: 30px 30px;
`
export const Label = styled.p`
font-size: 16px;
line-height: 19px;
color: #ffffff;
`
export const Input = styled.input`
width: 100%;
min-width: 250px;
height: 45px;
border-radius: 5px;
border: none;
color: #000;
padding: 5px;
font-size: 15px;
margin-bottom: 3px;
`

export const LabelUpload = styled.label`
cursor: grab;
display: flex;
align-items: center;
justify-content: center;
border: dashed 1px #ffffff;
border-radius: 5px;
padding: 10px;
color: #fff;
gap: 10px;

input {
    opacity: 0;
    width: 1px;
}
`
export const StyledButton = styled(Button) `
background: red;
width: 100%;
`





