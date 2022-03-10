import { Row, Col, Container } from 'react-bootstrap'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'

const ProductList = ({ products }) => {

    return (
        <Container className='productList'>
            <h1>Productos</h1>
            <hr />
            <Row className='justify-content-center'>
                {products.map(product => {
                    return <Col md={4} key={product._id}> <ProductCard {...product} /> </Col>
                })}
            </Row>
        </Container>
    )
}

export default ProductList