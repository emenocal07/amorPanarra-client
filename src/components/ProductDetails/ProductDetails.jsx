import { Card, Button, Row, Col, Container, Image } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/Auth.context'
import { MessageContext } from '../../context/UserMessage.context'
import productsService from '../../services/product.service'
import { CartContext } from '../../context/Cart.context'
import './ProductDetails.css'

const ProductDetails = ({ productDetails }) => {

    const { name, description, price, image, ingredients, category, weight, glutenfree, featured, _id } = productDetails
    const cartProduct = { name, price, image, _id }
    const { user, isLoggedIn } = useContext(AuthContext)
    const { setMessageInfo, setShowMessage } = useContext(MessageContext)

    const { addProductToCart } = useContext(CartContext)
    const navigate = useNavigate()

    const deleteProducts = () => {
        productsService
            .deleteProduct(_id)
            .then(() => {
                setShowMessage(true)
                setMessageInfo({ title: 'Perfecto!', desc: 'Producto eliminado' })
                navigate('/')
            })
            .catch(err => console.log(err))
    }


    return (
        <Container>
            <br /><br />
            <Card>
                <Container className='detailsProduct'>
                    <Row>
                        <Col>
                            <Card.Body>
                                <Card.Title><h1>{name}</h1></Card.Title>
                                <br />
                                <Card.Title>Descripción</Card.Title>
                                <hr />
                                <Card.Text>{description}</Card.Text>
                                <br />
                                <Card.Title>Ingredientes</Card.Title>
                                <hr />
                                <Card.Text>{ingredients}</Card.Text>
                                {/* <Card.Title>Información adicional</Card.Title>
                                <hr /> */}
                                <Link to='/'>
                                    <Button className='btn btn-outline-dark' variant="light" size='sm'><img style={{ width: '30px' }} src='https://res.cloudinary.com/dabjtydsw/image/upload/v1646900519/flecha2_laupdk.png' /></Button>
                                    {/* <Button style={{ width: '' }} className='btn btn-outline-warning' variant="light">Volver</Button> */}
                                </Link>
                            </Card.Body>
                        </Col>
                        <Col md={6} className='align-items-center'>
                            <Container>
                                <br />
                                <Image className='rounded imageProductDetails' style={{ width: '100%' }} variant="top" src={image} />
                                <Row>
                                    <Col md={3}>
                                        <br />
                                        <p>Peso: {weight} g</p>
                                        <p>Precio: {price} €</p>
                                    </Col>
                                    <Col md={9}>
                                        <br />
                                        <Button style={{ width: '100%' }} className='d-grip gap-2 btn btn-warning' size='lg' variant='warning' onClick={() => isLoggedIn ? addProductToCart(_id) : navigate('/inicio-sesion')}>Comprar</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Container>

                            {(user?.role === 'ADMIN') &&
                                <Card.Body>
                                    <Row >
                                        <Col >
                                            <Link to={`/productos/editar/${_id}`}>
                                                <Button style={{ width: '25%' }} className='btn btn-outline-dark' variant="light" >Editar</Button>
                                            </Link >

                                            <Button style={{ width: '25%' }} className='btn btn-outline-danger' variant="light" onClick={() => deleteProducts()}>Eliminar</Button>
                                        </Col>
                                        <Col >
                                        </Col>
                                    </Row>
                                </Card.Body>
                            }
                        </Container>
                    </Row>
                </Container>
            </Card >
        </Container >
    )
}

export default ProductDetails