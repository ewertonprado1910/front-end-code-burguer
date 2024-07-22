
import { createGlobalStyle } from "styled-components"
import "react-toastify/dist/ReactToastify.css"


const globalStyles = createGlobalStyle`
* 
{
margin: 0;
padding: 0;
box-sizing: border-box;
outline: none;
font-family: "Roboto", sans-serif;

button, a {
    cursor: grab;
}
}

`

export default globalStyles
