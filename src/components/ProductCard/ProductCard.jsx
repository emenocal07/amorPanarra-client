import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ProductCard.css'
import { ProductsContext } from "../../context/Products.context"
import { useContext } from 'react'


const ProductCard = ({ name, image, price, glutenfree, _id }) => {

    const cartProduct = { name, price, image, _id }
    const { addToCart } = useContext(ProductsContext)

    return (

        <article>

            <Card className='productCard' style={{ width: '18rem' }}>
                <Card.Img className='productImage' variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                {glutenfree ? <Card.Text>Sin gluten</Card.Text> : <Card.Text>Gluten a tope</Card.Text>}
                <Card.Text>Precio: {price}€</Card.Text>

                <Card.Body>
                    <Link className='btn btn-primary' to={`/productos/${_id}`}>Detalles</Link>
                    <Button variant="warning" onClick={() => addToCart(cartProduct)}>Agregar al carrito</Button>
                </Card.Body>
            </Card>

        </article>
    )
}

export default ProductCard