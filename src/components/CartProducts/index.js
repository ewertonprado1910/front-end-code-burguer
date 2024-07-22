import React from "react"
import PropTypes from "prop-types"
import { useHistory } from "react-router-dom"

import { Container, Image, ProductName, ProductPrice } from "./styles"
import { Button } from "../Button"
import { useCart } from "../../hooks/CartContext"

export function CartProducts({ product }) {
    const { putProductsCart } = useCart()
    const { push } = useHistory()
    
    return (
        <Container>
            <Image src={product.url} alt="img-products" />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <Button
                    onClick={() => {
                        putProductsCart(product)
                        push("/carrinho")
                    }}>Adicionar
                </Button>
            </div>
        </Container>
    )
}

CartProducts.propTypes = {
    product: PropTypes.object

}