import { createContext, useState, useEffect, useContext } from 'react';
import usersService from '../services/user.service';


const CartContext = createContext();

function CartProviderWrapper(props) {

    const [productsInCart, setProductsInCart] = useState([])

    const shippingCost = 3.50

    const loadCart = () => {
        usersService
            .getCartProducts()
            .then(({ data }) => setProductsInCart(data.productsCart))
            .catch(err => console.log(err))
    }

    const addProductToCart = (productId) => {
        usersService
            .addUserProduct(productId)
            .then(({ data }) => setProductsInCart(data))
            .catch(err => console.log(err))
    }

    const removeProductFromCart = (productId) => {
        usersService
            .removeUserProduct(productId)
            .then(({ data }) => loadCart())
            .catch(err => console.log(err))
    }

    const getSubtotal = () => productsInCart.reduce((acc, elm) => acc + elm.product.price, 0)

    const getTotalPrice = () => getSubtotal() + shippingCost

    const getTotalItems = () => productsInCart?.length

    const emptyCart = () => setProductsInCart([])

    return (
        <CartContext.Provider value={{ loadCart, productsInCart, removeProductFromCart, addProductToCart, shippingCost, getSubtotal, getTotalPrice, getTotalItems, emptyCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProviderWrapper };