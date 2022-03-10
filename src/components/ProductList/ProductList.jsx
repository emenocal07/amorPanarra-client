import { Row, Col, Container } from 'react-bootstrap'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'

const ProductList = ({ products }) => {

    return (
        <Container className='productList'>
            <h2 className='titleProductList'>Productos</h2>
            <hr />
            <Row >
                {products.map(product => {
                    return <Col className='justify-content-center' md={4} key={product._id}> <ProductCard {...product} /> </Col>
                })}
            </Row>
        </Container>
    )
}

export default ProductList