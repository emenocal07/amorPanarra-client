import { useState, useEffect, useContext } from "react"
import { Container } from "react-bootstrap"
import productsService from '../../services/product.service'
import ProductList from '../../components/ProductList/ProductList'
import Slider from "../../components/Slider/Slider"
import './HomePage.css'
import LoadingSpinner from "../../components/Spinner/Spinner"
import { ProductsContext } from "../../context/Products.context"


const HomePage = () => {

    const { loadProducts, products } = useContext(ProductsContext)

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <>
            <section>
                <Slider />
                <Container className="catalog">
                    <h1>Productos</h1>
                    <hr />
                    {!products.length ? <LoadingSpinner /> : <ProductList products={products} />}
                </Container>
            </section>

            <br />
        </>
    )

}

export default HomePage