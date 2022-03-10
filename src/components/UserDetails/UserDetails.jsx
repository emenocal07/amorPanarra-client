import { useContext } from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { MessageContext } from "../../context/UserMessage.context"
import usersService from '../../services/user.service'


const UserDetails = ({ userDetails }) => {
    const { username, userlastname, email, phone, address, role } = userDetails

    const { setShowMessage, setMessageInfo } = useContext(MessageContext)
    const { user_id } = useParams()

    const deleteProfile = () => {
        usersService
            .deleteUser(user_id)
            .then(() => {
                setShowMessage(true)
                setMessageInfo({ title: 'Hecho!', desc: 'Usuario eliminado' })
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Card.Body>
                <Card.Title><h1>{username} {userlastname}</h1></Card.Title>
            </Card.Body>
            <Card.Body>
                <hr />
                <Card.Title>Dirección</Card.Title>
                <Card.Text>Calle {address.street.name} {address.street.number}, {address.postCode} {address.city}, {address.country}</Card.Text>
                <hr />
                <Card.Title>Contacto</Card.Title>
                <Card.Text>Teléfono: {phone}</Card.Text>
                <Card.Text>email: {email}</Card.Text>
                <hr />
                <Card.Title>Rol</Card.Title>
                <Card.Text>{role}</Card.Text>
                <hr />
            </Card.Body>
            <Card.Body>
                <Link to={`/perfiles/editar/${user_id}`}><Button variant="warning">Editar</Button></Link>
                <Button variant="danger" onClick={() => deleteProfile()}>Eliminar</Button>
            </Card.Body>
        </Container>
    )
}

export default UserDetails