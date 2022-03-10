import { ButtonToolbar } from "react-bootstrap"
import EditProductForm from "../../components/EditProductForm/EditProductForm"
import { Container } from 'react-bootstrap'

const EditProductPage = () => {


    return (
        <Container>
            <h3>Editar producto</h3>
            <EditProductForm />
        </Container>
    )
}

export default EditProductPage