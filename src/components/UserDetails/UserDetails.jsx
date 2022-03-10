import { useContext } from 'react'
import { AuthContext } from '../../context/Auth.context'
import { Card, Button, Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { MessageContext } from "../../context/UserMessage.context"
import usersService from '../../services/user.service'


const UserDetails = ({ userDetails }) => {
    const { username, userlastname, email, phone, address, role } = userDetails
    const { user } = useContext(AuthContext)

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
                {
                    (user?.role === 'ADMIN') &&
                    <>
                        <Card.Title>Rol</Card.Title>
                        <Card.Text>{role}</Card.Text>
                        <hr />
                    </>
                }
            </Card.Body >
            <Container>
                <Card.Body>
                    <Link to='/'>
                        <Button className='btn btn-outline-dark' variant="light" size='sm'><img style={{ width: '28px' }} src='https://res.cloudinary.com/dabjtydsw/image/upload/v1646900519/flecha2_laupdk.png' /></Button>
                        {/* <Button style={{ width: '' }} className='btn btn-outline-warning' variant="light">Volver</Button> */}
                    </Link>
                    <Link to={`/perfiles/editar/${user_id}`}><Button style={{ width: '10%' }} className='btn btn-outline-success' variant="light">Editar</Button></Link>
                    {(user?.role === 'ADMIN') &&
                        <Button style={{ width: '10%' }} className='btn btn-outline-danger' variant="light" onClick={() => deleteProfile()}>Eliminar</Button>
                    }
                </Card.Body>
            </Container>
        </Container >
    )
}

export default UserDetails