import React from "react"

import { useCart } from "../../hooks/CartContext"
import {
    Container,
    Header,
    Body,
    Price,
    PriceTotal,
    EmptyCart,
    DeleteButton
} from "./styles"
import { formatCurrency } from "../../utils/formatCurrency"
import ImgCart from "../../assets/carrinho.svg"
import ImgLixeira from "../../assets/lixo.png"

export function CartItens() {
    const { cartProducts, addProducts, decreaseProducts, deletProducts } = useCart()
    
    return (
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p>Quantidade</p>
                <p style={{ paddingLeft: 30 }}>Total</p>
                <p>Deletar Produto</p>
            </Header>

            {cartProducts && cartProducts.length > 0 ? (
                cartProducts.map(product => (

                    <Body key={product.id}>
                        <img src={product.url} alt="imagens-dos-produtos" />
                        <p>{product.name}</p>
                        <Price>{formatCurrency(product.price)}</Price>
                        <div>

                            <button onClick=
                                {() => decreaseProducts(product.id)}>-
                            </button>

                            <p>{product.quantity}</p>

                            <button onClick=
                                {() => addProducts(product.id)}>+
                            </button>

                        </div>
                        <PriceTotal>{formatCurrency
                            (product.quantity * product.price)}

                            <DeleteButton onClick={() => deletProducts(product.id)}>
                                <img src={ImgLixeira} alt="lixeira" />
                            </DeleteButton>

                        </PriceTotal>
                    </Body>

                ))
            ) : (
                <EmptyCart>
                    <p> O Carrinho esta vazio!</p>
                    <img src={ImgCart} alt="img-carrinho" />
                </EmptyCart>
            )
            }

        </Container>
    )
}