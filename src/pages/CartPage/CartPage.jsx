import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../context/Cart.context"
import { AuthContext } from "../../context/Auth.context"
import { Container, Table, Button, Row, Col } from "react-bootstrap"
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
            <Table striped bordered hover >
                <thead >
                    <tr>
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
                                <Button className='btn btn-outline-danger' variant="light" onClick={() => removeProductFromCart(elm._id)}>Eliminar</Button>
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
                        <th></th>

                    </tr>
                </tfoot>

            </Table>

            <Row className="justify-content-md-end">
                <Col md={{ span: 3, offset: 3 }}>
                    <h3>Total compra</h3>
                    <Table striped bordered hover >
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
                <Col >
                    <Link to='/'>
                        <Button className='btn btn-outline-warning' variant="light" size='lg'>Seguir comprando</Button>
                    </Link>
                </Col>
                <Col >
                    <Link to='/'>
                        <Button className='btn btn-outline-danger' variant="light" size='lg' onClick={() => removeAllProductsFromCart()}>Vaciar carrito</Button>
                    </Link >

                </Col >
                <Col md={{ span: 3, offset: 3 }}>
                    <Link to='/finalizar-compra' >
                        <Button className='buyButton btn btn-warning' style={{ width: '100%' }} variant="warning" size='lg'>Finalizar compra</Button>
                    </Link>
                </Col>
            </Row >
            <br />
        </Container >
        : (isEmpty ? <h1>Vacio</h1> : <h1><LoadingSpinner /></h1>)
}

export default CartPage