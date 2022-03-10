import { Container } from "react-bootstrap"
import EditUserForm from "../../components/EditUserForm/EditUserForm"
import './EditUserPage.css'

const EditUserPage = () => {

    return (
        <Container className='editUserPage'>
            <h3>Editar mi perfil</h3>
            <EditUserForm />
        </Container>
    )
}

export default EditUserPage