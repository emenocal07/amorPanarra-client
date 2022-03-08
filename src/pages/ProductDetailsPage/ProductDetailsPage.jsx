import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import productService from "../../services/product.service"
import { Container } from 'react-bootstrap'
import ProductDetails from "../../components/ProductDetails/ProductDetails"


const ProductDetailsPage = () => {

    const [productDetails, setProductDetails] = useState({})
    const [isloading, setisLoading] = useState(true)
    const { product_id } = useParams()

    useEffect(() => {
        productService
            .getOneProduct(product_id)
            .then(({ data }) => {
                setProductDetails(data)
                setisLoading(false)
            })
            .catch(err => console.log(err))

    }, [])


    return (

        <>

            {!isloading &&

                <Container>

                    <ProductDetails productDetails={productDetails} />

                </Container>
            }

        </>
    )
}

export default ProductDetailsPage