import { useContext, useState, useEffect } from "react"
import { ProductsContext } from "../../context/Products.context"
import { Container, Table, Button, Row, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'
import './CartPage.css'

const CartPage = () => {

    const { shoppingList, deleteFromCart } = useContext(ProductsContext)
    const [itemQuantity, setItemQuantity] = useState(1)
    const [subTotal, setSubtotal] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
      getSubTotal()
    }, [shoppingList, itemQuantity])

    useEffect(() => {
        getTotalResult()
    }, [subTotal])
    
    let shippingCost = 3.50

    function getSubTotal() {
        shoppingList.map((elm) => {
            setSubtotal(prevValue => prevValue + elm.price)
        })
        setTotal(subTotal + shippingCost)
    }

    function getTotalResult() {
        setTotal(subTotal + shippingCost)
    }

    function emptyCart() {
        shoppingList.length = 0
        return shoppingList
    }

    return (

        <Container>
            <h1>Detalles de tu pedido</h1>
            <Table striped bordered hover>
                <thead >
                    <tr>
                        <th>#</th>
                        <th>Producto</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                {shoppingList.map((product, idx) => {
                    return <tbody key={shoppingList._id}>
                        <tr >
                            <td>{idx + 1}</td>
                            <td><img className='tableImage' src={product.image} /></td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <Button variant="danger" onClick={() => setItemQuantity((countValue) => countValue - 1)}>-</Button>
                                {itemQuantity}
                                <Button variant="danger" onClick={() => setItemQuantity((countValue) => countValue + 1)}>+</Button>
                            </td>
                            <td>
                                <Button variant="danger" onClick={() => deleteFromCart(product)}>Eliminar</Button>
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
                        <th>{subTotal.toFixed(2)} €</th>
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
                                <td>{subTotal.toFixed(2)} €</td>
                            </tr>
                            <tr>
                                <td>Gastos de envío:</td>
                                <td>{shippingCost.toFixed(2)} €</td>
                            </tr>
                            <tr>
                                <td>Total:</td>
                                <td>{shoppingList.length === 0 ? '0.00' : total.toFixed(2)} €</td>
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
                        <Button className='btn btn-outline-warning' variant="danger" size='lg' onClick={() => emptyCart()}>Vaciar carrito</Button>
                    </Link>
                </Col>
                <Col md={{ span: 3, offset: 3 }}>
                    <Link to='/finalizar-compra' >
                        <Button className='buyButton btn btn-outline-warning' style={{ width: '100%' }} variant="dark" size='lg'>Finalizar compra</Button>
                    </Link>
                </Col>
            </Row>
            <br />
        </Container>

    )
}

export default CartPage