import { useContext } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/Auth.context'
import { MessageContext } from '../../context/UserMessage.context'
import usersService from '../../services/user.service'
import './UserCard.css'



const UserCard = ({ username, userlastname, email, role, _id }) => {

    const { setShowMessage, setMessageInfo } = useContext(MessageContext)
    const { user } = useContext(AuthContext)

    const navigate = useNavigate()
    const deleteProfile = () => {
        usersService
            .deleteUser(_id)
            .then(() => {
                setShowMessage(true)
                setMessageInfo({ title: 'Perfecto!', desc: 'Usuario eliminado' })
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (

        <Container>
            <Row>
                <Col >
                    <Card className='userCard' style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{username} {userlastname}</Card.Title>
                            <Card.Subtitle>{email}</Card.Subtitle>
                            <hr />
                            {(user?.role === 'ADMIN') &&
                                <Card.Subtitle>{role}</Card.Subtitle>
                            }
                        </Card.Body>
                        <Card.Body>
                            <Link className='btn btn-outline-dark' to={`/perfiles/${_id}`}>Detalles</Link>
                            <Button className='btn btn-outline-danger' variant="light" onClick={() => deleteProfile()}>Eliminar</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default UserCard