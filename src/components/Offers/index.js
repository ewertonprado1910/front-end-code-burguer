import React, { useEffect, useState } from "react"
import Carousel from "react-elastic-carousel"
import { useHistory } from "react-router-dom"

import LogoOffers from "../../assets/ofertas.svg"
import { api } from "../../services/api"
import { formatCurrency } from "../../utils/formatCurrency"
import { useCart } from "../../hooks/CartContext"

import {
    Container, ImageOffers,
    ContainerOffers, Img, Button
} from "./styles"



export function Offers() {
    const [offers, setOffers] = useState([])
    const { putProductsCart } = useCart()
    const { push } = useHistory()

    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get("products")

            const onlyOffers = data.filter(product => product.offer).map(product => {
                return {
                    ...product, formatedPrice: formatCurrency(product.price)
                }
            })

            setOffers(onlyOffers)
        }

        loadOffers()
    }, [])

    const breackPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1300, itemsToShow: 5 }
    ]


    return (
        <Container>
            <ImageOffers src={LogoOffers} alt="logo-offers" />

            <Carousel itemsToShow={5} style={{ width: "90%" }} breakPoints={breackPoints}>
                {
                    offers && offers.map(product => (
                        <ContainerOffers key={product.id}>
                            <Img src={product.url} alt="img-produto" />
                            <p>{product.name}</p>
                            <p>{product.formatedPrice}</p>
                            <Button
                                onClick={() => {
                                    putProductsCart(product)
                                    push("/carrinho")
                                }}
                            >Peça agora
                            </Button>
                        </ContainerOffers>

                    ))
                }

            </Carousel>


        </Container>
    )
}