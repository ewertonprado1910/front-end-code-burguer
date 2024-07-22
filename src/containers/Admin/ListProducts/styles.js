import styled from "styled-components"
import EditIcon from "@mui/icons-material/Edit"

export const Container = styled.div`
`
export const ListProductsImg = styled.img`
width: 70px;
border-radius: 5px;
`
export const EditIconButton = styled(EditIcon) `
cursor: grab;

&:active {
    opacity: 0.5;
}
`


