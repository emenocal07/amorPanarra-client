import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import UsersList from "../../components/UsersList/UsersList"
import usersService from '../../services/user.service'


const UsersListPage = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = () => {
        usersService
            .getAllUsers()
            .then(({ data }) => setUsers(data))
            .catch(err => console.log(err))
    }

    return (
        <section>
            <Container>
                <h1>Listado de Usuarios</h1>
                <hr />
                <UsersList users={users} />
            </Container>
        </section>

    )
}

export default UsersListPage