import { useEffect, useContext } from "react"
import ProductList from '../../components/ProductList/ProductList'
import Slider from "../../components/Slider/Slider"
import './HomePage.css'
import LoadingSpinner from "../../components/Spinner/Spinner"
import { ProductsContext } from "../../context/Products.context"
import AboutUs from "../../components/AboutUs/AboutUs"


const HomePage = () => {

    const { loadProducts, products } = useContext(ProductsContext)

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <>
            <Slider />
            <AboutUs />
            {!products.length ? <LoadingSpinner /> : <ProductList products={products} />}
            <br />
        </>
    )

}

export default HomePage