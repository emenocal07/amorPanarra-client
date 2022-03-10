import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../context/Cart.context"
import { AuthContext } from "../../context/Auth.context"
import { Container, Table, Button, Row, Col, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import LoadingSpinner from "../../components/Spinner/Spinner"
import './CartPage.css'

const CartPage = () => {

    const { productsInCart, loadCart, removeProductFromCart, getSubtotal, getTotalPrice, shippingCost, removeAllProductsFromCart, isEmpty } = useContext(CartContext)

    const { user } = useContext(AuthContext)

    useEffect(() => {
        user && loadCart()
    }, [user])

    return productsInCart.length
        ? <Container>
            <h1>Detalles de tu pedido</h1>
            <Row>
                <Col md={{ offset: 3, span: 6 }}>

                    <Table size="sm" responsive="md" className='tableContent' >
                        <thead>
                            <tr >
                                <th>#</th>
                                <th>Producto</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th></th>
                            </tr>
                        </thead>
                        {productsInCart.map((elm, idx) => {
                            return <tbody key={idx}>
                                <tr >
                                    <td>{idx + 1}</td>
                                    <td><img className='tableImage' src={elm.product.image} /></td>
                                    <td>{elm.product.name}</td>
                                    <td>{elm.product.price?.toFixed(2)}€</td>
                                    <td>
                                        <img className='delete' onClick={() => removeProductFromCart(elm._id)} style={{ width: '25px' }} src='https://res.cloudinary.com/dabjtydsw/image/upload/v1646942769/50625343593_inpzav.png' />
                                    </td>
                                </tr>
                            </tbody>
                        })
                        }
                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Subtotal</th>
                                <th>{getSubtotal().toFixed(2)} €</th>
                                <th> <Link to='/'>
                                    <Button className='btn btn-outline-danger' variant="light" style={{ width: '90%' }} onClick={() => removeAllProductsFromCart()}>Eliminar compra</Button>
                                </Link >
                                </th>

                            </tr>
                        </tfoot>

                    </Table>
                </Col>
            </Row>

            <Row>
                <Col md={{ span: 3, offset: 6 }}>
                    <h3>Total compra</h3>
                    <Table >
                        <tbody >
                            <tr>
                                <td>Subtotal:</td>
                                <td>{getSubtotal().toFixed(2)} €</td>
                            </tr>
                            <tr>
                                <td>Gastos de envío:</td>
                                <td>{shippingCost?.toFixed(2)} €</td>
                            </tr>
                            <tr>
                                <td>Total:</td>
                                <td>{productsInCart.length ? getTotalPrice().toFixed(2) : '0.00'} €</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Row >

                <Col md={{ offset: 3, span: 6 }}>
                    <Link to='/'>
                        <Button className='btn btn-outline-dark cartButton' variant="light" size='lg' style={{ width: '49%' }}>Seguir comprando</Button>
                    </Link>
                    <Link to='/finalizar-compra' >
                        <Button className='buyButton btn btn-warning cartButton' style={{ width: '49%' }} variant="warning" size='lg'>Finalizar compra</Button>
                    </Link>
                </Col>
            </Row >
            <br />
        </Container >
        : (isEmpty ? <h1>Vacio</h1> : <h1><LoadingSpinner /></h1>)
}

export default CartPage