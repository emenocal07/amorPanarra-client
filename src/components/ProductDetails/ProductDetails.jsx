import { Card, Button, Row, Col, Container, Image } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ProductsContext } from "../../context/Products.context"
import { AuthContext } from '../../context/Auth.context'
import { MessageContext } from '../../context/UserMessage.context'
import productsService from '../../services/product.service'


const ProductDetails = ({ productDetails }) => {
    console.log(productDetails)

    const { name, description, price, image, ingredients, category, weight, glutenfree, featured, _id } = productDetails
    const cartProduct = { name, price, image, _id }
    const { addToCart } = useContext(ProductsContext)
    const { user } = useContext(AuthContext)
    const { setMessageInfo, setShowMessage } = useContext(MessageContext)

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
                <Container>
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
                                <Card.Title>Información adicional</Card.Title>
                                <hr />
                                <Card.Text>Peso: {weight} g</Card.Text>
                                <Card.Text>Precio: {price} €</Card.Text>
                            </Card.Body>
                        </Col>
                        <Col md={6}>
                            <br />
                            <Image className='rounded' style={{ width: '500px' }} variant="top" src={image} />
                            <br />
                            <div className='d-grip gap-2'>
                                <Button className='btn btn-outline-warning' variant='dark' onClick={() => addToCart(cartProduct)}>Comprar</Button>
                            </div>
                        </Col>


                        {(user?.role === 'ADMIN') &&
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Link to={`/productos/editar/${_id}`}>
                                            <Button className='btn btn-outline-success' variant="light" >Editar</Button>
                                        </Link >
                                        <Button className='btn btn-outline-danger' variant="light" onClick={() => deleteProducts()}>Eliminar</Button>
                                    </Col>
                                    <Col md={{ span: 11, offset: 11 }}>
                                        <Link to='/'>
                                            <Button className='btn btn-outline-warning' variant="light">Volver</Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </Card.Body>
                        }

                    </Row>
                </Container>
            </Card >
        </Container >
    )
}

export default ProductDetails