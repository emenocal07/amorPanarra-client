import { useContext } from 'react'
import { Card, Container } from 'react-bootstrap'
import { AuthContext } from '../../context/Auth.context'


const UserDetails = ({ userDetails }) => {
    const { username, userlastname, email, phone, address, role } = userDetails
    const { user } = useContext(AuthContext)

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
                {(user?.role === 'ADMIN') &&
                    <>
                        <Card.Title>Rol</Card.Title>
                        <Card.Text>{role}</Card.Text>
                        <hr />
                    </>
                }
            </Card.Body>
        </Container>
    )
}

export default UserDetails