import React, { useEffect } from 'react'
import { CartContext } from "../../context/Cart.context"
import { AuthContext } from "../../context/Auth.context"
import { useContext } from 'react'
import './ShoppingCart.css'

function ShoppingCart() {

    const { user } = useContext(AuthContext)
    const { loadCart, getTotalItems } = useContext(CartContext)

    useEffect(() => user && loadCart(user._id), [user])

    return (
        <>
            <img alt='cart icon' src='https://res.cloudinary.com/dabjtydsw/image/upload/v1646412222/Amor%20Panarra/shoppingcart_77968_lfokg5.png' /> <span className='numbers'>{getTotalItems()}</span>

        </>

    )
}

export default ShoppingCart