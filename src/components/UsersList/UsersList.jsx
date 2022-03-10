import { Row, Col, Container } from 'react-bootstrap'
import UserCard from '../UserCard/UserCard'
import './UserList.css'

const UsersList = ({ users }) => {

    return (
        <Container className='userList'>
            <h2 className='title-userList'>Usuarios</h2>
            <hr />
            <Row>
                {users.map(user => {
                    return <Col md={4} key={user._id}> <UserCard {...user} /> </Col>
                })}
            </Row>
        </Container>
    )
}

export default UsersList