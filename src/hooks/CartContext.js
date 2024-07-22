import React, { createContext, useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

const CartContext = createContext({})

const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])

    const updateLocalStorage = async (product) => {
        await localStorage.setItem("codeburguer:cartInfo", JSON.stringify(product))

    }

    const putProductsCart = async product => {
        const cartIndex = cartProducts.findIndex(prod => prod.id === product.id)

        let newCartProducts = []
        if (cartIndex >= 0) {
            newCartProducts = cartProducts
            newCartProducts[cartIndex].quantity =
                newCartProducts[cartIndex].quantity + 1

            setCartProducts(newCartProducts)

        } else {
            product.quantity = 1
            newCartProducts = [...cartProducts, product]
            setCartProducts(newCartProducts)
        }

        await updateLocalStorage(newCartProducts)
    }

    const deletProducts = async productsId => {
        const newCart = cartProducts.filter(product => product.id !== productsId)

        setCartProducts(newCart)

        await updateLocalStorage(newCart)
    }

    const addProducts = async productId => {
        const newCart = cartProducts.map(product => {
            return product.id === productId ? {
                ...product, quantity: product.quantity + 1
            }
                : product
        })
        setCartProducts(newCart)

        await updateLocalStorage(newCart)
    }

    const decreaseProducts = async productId => {
        const cartIndex = cartProducts.findIndex(pd => pd.id === productId)

        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map(product => {
                return product.id === productId ? {
                    ...product, quantity: product.quantity - 1
                }
                    : product
            })
            setCartProducts(newCart)

            await updateLocalStorage(newCart)
        } else {
            deletProducts(productId)
        }

    }

    useEffect(() => {
        const loadUserData = async () => {
            const clientCartData = await localStorage.getItem("codeburguer:cartInfo")

            if (clientCartData) {
                setCartProducts(JSON.parse(clientCartData))
            }
        }

        loadUserData()
    }, [])

    return (
        <CartContext.Provider
            value={{
                putProductsCart,
                cartProducts,
                addProducts,
                decreaseProducts,
                deletProducts

            }}>{children}
        </CartContext.Provider>

    )
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error("useCart error")
    }
    return context
}


CartProvider.propTypes = {
    children: PropTypes.node
}

export default CartProvider