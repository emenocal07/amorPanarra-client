import { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { MessageContext } from '../../context/UserMessage.context'
import usersService from '../../services/user.service'
import './UserCard.css'

const UserCard = ({ username, userlastname, email, role, _id }) => {

    const { setShowMessage, setMessageInfo } = useContext(MessageContext)

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

        <article>

            <Card className='userCard' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{username} {userlastname}</Card.Title>
                    <Card.Subtitle>{email}</Card.Subtitle>
                    <hr />
                    <Card.Subtitle>{role}</Card.Subtitle>
                </Card.Body>
                <Card.Body>
                    <Link className='btn btn-warning' to={`/perfiles/${_id}`}>Detalles</Link>
                    <Button className='btn btn-warning' variant="danger" onClick={() => deleteProfile()}>Eliminar</Button>
                </Card.Body>
            </Card>

        </article>
    )
}

export default UserCard