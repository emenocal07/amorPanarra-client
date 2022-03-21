import { createContext, useState } from 'react';
import usersService from '../services/user.service';


const CartContext = createContext();

function CartProviderWrapper(props) {

    const [productsInCart, setProductsInCart] = useState([])

    const [isEmpty, setIsEmpty] = useState(false)

    const shippingCost = 3.50

    const updateCart = (products) => {
        !products.length ? setIsEmpty(true) : setIsEmpty(false)
        setProductsInCart(products)
    }

    const loadCart = () => {
        usersService
            .getCartProducts()
            .then(({ data }) => updateCart(data.productsCart))
            .catch(err => console.log(err))
    }

    const addProductToCart = (productId) => {
        usersService
            .addUserProduct(productId)
            .then(() => loadCart())
            .catch(err => console.log(err))
    }

    const removeProductFromCart = (productId) => {
        usersService
            .removeUserProduct(productId)
            .then(() => loadCart())
            .catch(err => console.log(err))
    }

    const removeAllProductsFromCart = () => {
        usersService
            .removeAllUserProduct()
            .then(() => loadCart())
            .catch(err => console.log(err))
    }

    const getSubtotal = () => productsInCart.reduce((acc, elm) => acc + elm.product.price, 0)

    const getTotalPrice = () => getSubtotal() + shippingCost

    const getTotalItems = () => productsInCart?.length

    const emptyCart = () => setProductsInCart([])

    return (
        <CartContext.Provider value={{ loadCart, productsInCart, removeProductFromCart, addProductToCart, shippingCost, getSubtotal, getTotalPrice, getTotalItems, emptyCart, removeAllProductsFromCart, isEmpty }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProviderWrapper };