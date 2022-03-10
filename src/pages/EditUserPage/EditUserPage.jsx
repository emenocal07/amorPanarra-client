import { Container } from "react-bootstrap"
import EditUserForm from "../../components/EditUserForm/EditUserForm"
import './EditUserPage.css'

const EditUserPage = () => {

    return (
        <Container className='editUserPage'>
            <EditUserForm />
        </Container>
    )
}

export default EditUserPage