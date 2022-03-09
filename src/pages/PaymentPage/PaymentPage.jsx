import { useContext } from "react"
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"
import { CartContext } from "../../context/Cart.context"

const PaymentPage = () => {

    const { getTotalPrice } = useContext(CartContext)

    return (
        <Container>
            <br />
            <Card>
                <Form>
                    <Row className='justify-content-center align-items-center'>
                        <Col md={5}>
                            <Container>
                                <Card.Header>

                                    <h1>Importe total a pagar</h1>
                                    <h1>{getTotalPrice().toFixed(2)}€</h1>

                                </Card.Header>
                            </Container>
                        </Col>
                        <Col md={5}>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Form.Check
                                            type="radio"
                                            id="radio"
                                            label="Pago con tarjeta"
                                            name='Pagocontarjeta'
                                        ></Form.Check>

                                    </Col>
                                    <Col className='justify-content-end'>
                                        <img style={{ width: '50%' }} src='https://res.cloudinary.com/dabjtydsw/image/upload/v1646737044/visamc.png_iihint.png' />
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="creditcardnumber">
                                    <Form.Control type="number" placeholder="Número de tarjeta" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="creditcardnumber">
                                    <Form.Control type="text" placeholder="Nombre del titular" />
                                </Form.Group>
                                <Row className='justify-content-space-between'>
                                    <Col md={8}>
                                        <Form.Group className="mb-3" controlId="creditcardnumber">
                                            <Form.Control type="text" placeholder="Fecha de vencimiento (MM/AA)" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-3" controlId="creditcardnumber">
                                            <Form.Control type="number" placeholder="(CVV)" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className='d-grid gap-2'>
                                    <Button variant="warning" type="submit">
                                        Pagar
                                    </Button>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container >
    )
}

export default PaymentPage