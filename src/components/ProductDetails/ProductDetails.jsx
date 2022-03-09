import { Card, Button, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ProductsContext } from "../../context/Products.context"
import { useContext } from 'react'
import { AuthContext } from '../../context/Auth.context'


const ProductDetails = ({ productDetails }) => {

    const { name, description, price, image, ingredients, category, weight, glutenfree, featured, _id } = productDetails
    const cartProduct = { name, price, image, _id }
    const { addToUserCart } = useContext(ProductsContext)
    const { user } = useContext(AuthContext)


    return (
        <Container>
            <Row>
                <Col>
                    <Card.Body>
                        <Card.Title><h1>{name}</h1></Card.Title>
                        <Card.Title>Descripción</Card.Title>
                        <hr />
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Col>
                <Col><Card.Img variant="top" src={image} /></Col>
                <Card.Body>
                    <Card.Title>Ingredientes</Card.Title>
                    <hr />
                    <Card.Text>{ingredients}</Card.Text>
                    <Card.Title>Categoria</Card.Title>
                    <hr />
                    <Card.Text>{category}</Card.Text>
                    <Card.Title>Información adicional</Card.Title>
                    <hr />
                    <Card.Text>Sin gluten: {glutenfree}</Card.Text>
                    <Card.Text>Peso: {weight}</Card.Text>
                    <Card.Text>Destacado: {featured}</Card.Text>
                    <Card.Text>Precio: {price} €</Card.Text>
                    <Button variant="warning" onClick={() => addToUserCart(cartProduct)}>Agregar al carrito</Button>
                    <Link to='/'>
                        <Button className='btn btn-outline-warning' variant="light">Volver a la lista</Button>
                    </Link>

                </Card.Body>
                {(user?.role === 'ADMIN') &&
                    <Card.Body>
                        <Link to={`/productos/editar/${_id}`}>
                            <Button variant="warning" >Editar producto</Button>
                        </Link>
                        <Button variant="danger" >Eliminar producto</Button>
                    </Card.Body>
                }
            </Row>
        </Container>
    )
}

export default ProductDetails