import React from "react"

import LogoCart from "../../assets/cart-image.svg"
import { CartItens, CartResume } from "../../components"
import { Container, ImageCart, Wrapper } from "./styles"


export function Cart() {
    return (
        <Container>
            <ImageCart src={LogoCart} alt="logo-cart" />
            <Wrapper>
                <CartItens />
                <CartResume/>
            </Wrapper>

        </Container>
    )
}