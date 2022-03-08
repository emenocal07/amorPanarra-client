import { createContext, useState } from 'react';
import productsService from '../services/product.service';


const ProductsContext = createContext();

function ProductProviderWrapper(props) {
    const [shoppingList, setShoppingList] = useState([])
    console.log(shoppingList);

    const [products, setProducts] = useState({})

    const loadProducts = () => {
        productsService
            .getAllProducts()
            .then(({ data }) => setProducts(data))
            .catch(err => console.log(err))
    }
    const addToCart = (item) => {
        if (shoppingList.some(product => product._id === item._id)) {
            console.log('REPETIDO');
            return
        }
        setShoppingList([...shoppingList, item])
    }

    const deleteFromCart = (item) => {
        const updatedList = shoppingList.filter(product => product._id !== item._id)
        setShoppingList(updatedList)
    }


    return (
        <ProductsContext.Provider value={{ loadProducts, products, addToCart, deleteFromCart, shoppingList }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export { ProductsContext, ProductProviderWrapper };