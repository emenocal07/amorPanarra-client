import { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MessageContext } from '../../context/UserMessage.context'
import usersService from '../../services/user.service'
import './UserCard.css'

const UserCard = ({ username, userlastname, email, role, _id }) => {

    const { setShowMessage, setMessageInfo } = useContext(MessageContext)

    const deleteProfile = () => {
        usersService
            .deleteUser(_id)
            .then(() => {
                setShowMessage(true)
                setMessageInfo({ title: 'Hecho!', desc: 'Usuario eliminado' })
            })
            .catch(err => console.log(err))
    }

    return (

        <article>

            <Card className='userCard' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{username} {userlastname}</Card.Title>
                    <Card.Subtitle>{email}</Card.Subtitle>
                    <hr/>
                    <Card.Subtitle>{role}</Card.Subtitle>
                </Card.Body>
                <Card.Body>
                    <Link className='btn btn-warning' to={`/perfiles/${_id}`}>Detalles</Link>
                    <Button variant="danger" onClick={() => deleteProfile()}>Eliminar</Button> 
                </Card.Body>
            </Card>

        </article>
    )
}

export default UserCard