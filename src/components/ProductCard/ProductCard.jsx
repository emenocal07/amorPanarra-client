import { Card, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ProductCard.css'
import { CartContext } from '../../context/Cart.context'
import { useContext } from 'react'



const ProductCard = ({ name, image, price, glutenfree, _id }) => {

    const { addProductToCart } = useContext(CartContext)

    return (

        <Card className='productCard' style={{ width: '100%' }}>
            <Link to={`/productos/${_id}`}><Card.Img className='productImage' variant="top" src={image} /></Link>
            <Card.Body>
                <Link className='titleProductCard' to={`/productos/${_id}`}><Card.Title>{name} {glutenfree && <img className='gluten' src='https://res.cloudinary.com/dabjtydsw/image/upload/v1646934143/gluten-free-icon_ranzca.png' />}</Card.Title></Link>

                <Row>
                    <Col className='align-items-center'>
                        <Card.Text>Precio: {price}€ </Card.Text>
                    </Col>
                    <Col md={4}>
                        <Button className='btn btn-outline-warning' size='sm' variant='dark' onClick={() => addProductToCart(_id)}>Comprar</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>


    )
}

export default ProductCard