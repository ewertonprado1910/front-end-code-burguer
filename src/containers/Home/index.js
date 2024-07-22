import React from "react"

import {Categories, Offers} from "../../components"
import LogoHome from "../../assets/background.svg.svg"
import {Container, ImageHome} from "./styles"



export function Home() {
    return (
        <Container>
            
            <ImageHome src={LogoHome} alt="logo-home"/>
            <Categories/>
            <Offers/>
        </Container>
    )
}