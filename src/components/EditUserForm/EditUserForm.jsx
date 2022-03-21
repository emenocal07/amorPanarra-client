import { useContext, useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap"
import { useNavigate, useParams, Link } from "react-router-dom";
import usersService from "../../services/user.service";
import { MessageContext } from "../../context/UserMessage.context"

const EditUserForm = () => {

    const [userDetails, setUserDetails] = useState({
        username: "",
        userlastname: "",
        email: "",
        phone: 0,
        name: "",
        number: 0,
        postCode: 0,
        city: "",
        country: ""
    })
    const [isLoading, setIsLoading] = useState(true)
    const { user_id } = useParams()

    const { username, userlastname, email, phone, name, number, postCode, city, country } = userDetails

    useEffect(() => {
        usersService
            .getOneUser(user_id)
            .then(({ data }) => {
                const { username, userlastname, email, phone, address: { street: { name, number }, postCode, city, country } } = data
                const editedDetails = { username, userlastname, email, phone, name, number, postCode, city, country }
                setUserDetails(editedDetails)
                setIsLoading(false)
            })
            .catch(err => console.log(err))

    }, [])

    const { setShowMessage, setMessageInfo } = useContext(MessageContext)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target

        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        usersService
            .editUser(user_id, userDetails)
            .then(() => {
                setShowMessage(true)
                setMessageInfo({ title: 'Hecho!', desc: 'Usuario editado' })
                navigate(`/perfiles/${user_id}`)

            })
            .catch(err => console.log(err))
    }

    return isLoading
        ? <h1>Cargando</h1>
        : (

            <Container >
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col >
                                    <Form.Group className="mb-3 mt-3" controlId="username" >
                                        <Form.Label>Nombre:</Form.Label>
                                        <Form.Control type="text" value={username} onChange={handleInputChange} name='username' />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3 mt-3" controlId="userlastname" >
                                        <Form.Label>Apellido:</Form.Label>
                                        <Form.Control type="text" value={userlastname} onChange={handleInputChange} name='userlastname' />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="description" >
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type='email' value={email} onChange={handleInputChange} name='email' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="phone" >
                                <Form.Label>Phone:</Form.Label>
                                <Form.Control type='number' value={phone} onChange={handleInputChange} name='phone' />
                            </Form.Group>
                            <Row> <h5>Dirección:</h5>
                                <Col>
                                    <Form.Group className="mb-3" controlId="name" >
                                        <Form.Label>Calle:</Form.Label>
                                        <Form.Control type="text" value={name} onChange={handleInputChange} name='name' />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="number" >
                                        <Form.Label>Número:</Form.Label>
                                        <Form.Control type="number" value={number} onChange={handleInputChange} name='number' />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="postCode" >
                                        <Form.Label>Código Postal:</Form.Label>
                                        <Form.Control type="number" value={postCode} onChange={handleInputChange} name='postCode' />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="city" >
                                        <Form.Label>Ciudad:</Form.Label>
                                        <Form.Control type="text" value={city} onChange={handleInputChange} name='city' />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="country" >
                                        <Form.Label>País:</Form.Label>
                                        <Form.Control type="text" value={country} onChange={handleInputChange} name='country' />
                                    </Form.Group>
                                </Col>
                            </Row>
                            < div className="d-grid gap-2 mb-3" >
                                <Button variant="warning" type="submit">Editar</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
                <Link to='/perfiles'>
                    <Button className='btn btn-outline-warning buttonUser' variant="light" size='sm'><img style={{ width: '28px' }} src='https://res.cloudinary.com/dabjtydsw/image/upload/v1646946851/arrow-left-c_icon-icons.com_50470_fqfgzk.png' /></Button>
                </Link>
            </Container>

        )
}

export default EditUserForm