import React, { useEffect, useState } from "react"
import Carousel from "react-elastic-carousel"

import LogoCategories from "../../assets/categorias.svg"
import { api } from "../../services/api"

import {
    Container, ImageCategory,
    ContainerCategories, Img, Button
} from "./styles"



export function Categories() {
    const [category, setCategory] = useState()

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get("categories")

            setCategory(data)
        }

        loadCategories()
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
            <ImageCategory src={LogoCategories} alt="logo-categorie" />

            <Carousel itemsToShow={5} style={{ width: "90%" }} breakPoints={breackPoints}>
                {
                    category && category.map(category => (
                        <ContainerCategories key={category.id}>
                            <Img src={category.url} alt="img-category" />
                            <Button to={{
                                pathname: "/produtos",
                                state: { categoryId: category.id }
                            }}>{category.name}</Button>
                        </ContainerCategories>

                    ))
                }

            </Carousel>


        </Container>
    )
}