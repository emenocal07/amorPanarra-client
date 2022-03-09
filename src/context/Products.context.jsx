import { createContext, useState } from 'react';
import productsService from '../services/product.service';


const ProductsContext = createContext();

function ProductProviderWrapper(props) {
    const [products, setProducts] = useState({})

    const loadProducts = () => {
        productsService
            .getAllProducts()
            .then(({ data }) => setProducts(data))
            .catch(err => console.log(err))
    }

    return (
        <ProductsContext.Provider value={{ loadProducts, products }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export { ProductsContext, ProductProviderWrapper };