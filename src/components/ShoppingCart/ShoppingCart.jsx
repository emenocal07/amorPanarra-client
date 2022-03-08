import React, { useState, useEffect } from 'react'
import { ProductsContext } from "../../context/Products.context"
import { useContext } from 'react'
import './ShoppingCart.css'

function ShoppingCart() {
    const { shoppingList } = useContext(ProductsContext)
    const [numberOfItems, setNumberOfItems] = useState(0)

    useEffect(() => {
        setNumberOfItems(shoppingList.length)
    }, [shoppingList])

    return (
        <>
            <img src='https://res.cloudinary.com/dabjtydsw/image/upload/v1646412222/Amor%20Panarra/shoppingcart_77968_lfokg5.png' /> {shoppingList.length === 0 ? <span></span> : <span className='numbers'>{numberOfItems}</span>}
        </>

    )
}

export default ShoppingCart