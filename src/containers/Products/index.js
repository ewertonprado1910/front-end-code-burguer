import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import { api } from "../../services/api"
import { formatCurrency } from "../../utils/formatCurrency"


import LogoProducts from "../../assets/background-sessão.svg"
import {
    Container,
    ImageProducts,
    ButtonProducts,
    ContainerMenu,
    ContainerProducts
} from "./styles"
import { CartProducts } from "../../components"


export function Products({ location: { state } }) {
    let categoryId = 0
    if (state?.categoryId) {
        categoryId = state.categoryId
    }
    const [category, setCategory] = useState([])
    const [products, setProducts] = useState([])
    const [filterredProducts, setFilterredProducts] = useState([])
    const [activeCategory, setActiveCategory] = useState(categoryId)

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get("categories")

            const newCategory = [{ id: 0, name: "Todas" }, ...data]

            setCategory(newCategory)
        }

        async function loadProducts() {
            const { data: allProducts } = await api.get("products")

            const newProducts = allProducts.map(product => {
                return {
                    ...product, formatedPrice: formatCurrency(product.price)
                }
            })

            setProducts(newProducts)
        }

        loadCategories()
        loadProducts()
    }, [])


    useEffect(() => {
        if (activeCategory === 0) {
            setFilterredProducts(products)

        } else {
            const newFilterProducts = products.filter(
                product => product.category_id === activeCategory)

            setFilterredProducts(newFilterProducts)
        }
    }, [activeCategory, products])


    return (
        <Container>
            <ImageProducts src={LogoProducts} alt="logo-products" />
            <ContainerMenu>
                {category && category.map(categories => (
                    <ButtonProducts
                        type="button"
                        key={categories.id}
                        isActiveCategory={activeCategory === categories.id}
                        onClick={() => { setActiveCategory(categories.id) }}>

                        {categories.name}
                    </ButtonProducts>
                ))}
            </ContainerMenu>

            <ContainerProducts>
                {filterredProducts && filterredProducts.map(product => (
                    <CartProducts key={product.id} product={product} />
                ))}

            </ContainerProducts>


        </Container>
    )
}

Products.propTypes = {
    location: PropTypes.object
}