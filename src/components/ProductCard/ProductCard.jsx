import { Card, Button, Row, Col, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './ProductCard.css'
import { CartContext } from '../../context/Cart.context'
import { useContext } from 'react'
import { AuthContext } from '../../context/Auth.context'

const ProductCard = ({ name, image, price, glutenfree, _id }) => {

    const navigate = useNavigate()

    const { addProductToCart } = useContext(CartContext)
    const { isLoggedIn } = useContext(AuthContext)

    return (
        <Card className='productCard' style={{ width: '100%' }}>
            <Container className='productCardContainer'>
                <Link to={`/productos/${_id}`}><Card.Img className='productImage' variant="top" src={image} /></Link>
                <Card.Body>
                    <Link className='titleProductCard' to={`/productos/${_id}`}><Card.Title>{name}</Card.Title></Link>
                    <Row>
                        <Col md={6} className='align-items-center'>
                            <Card.Text>Precio: {price}€ </Card.Text>
                        </Col>
                        <Col md={{ offset: 3, span: 3 }}>
                            <Button className='btn btn-warning' size='sm' variant='warning' onClick={() => isLoggedIn ? addProductToCart(_id) : navigate('/inicio-sesion')}>Comprar</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Container>
        </Card>

    )
}

export default ProductCard