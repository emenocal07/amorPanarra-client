import { Container, Row, Col } from 'react-bootstrap'
import SignupForm from '../../components/SignupForm/SignupForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import './AuthPage.css'

function AuthPage() {

    return (
        <Container className='forms'>
            <Row className="justify-content-md-center align-items-center">
                <Col md={5}>
                    <h3>Registro</h3>
                    <SignupForm />
                </Col>
                <Col md={5}>
                    <h3>Inicio de sesión</h3>
                    <LoginForm />
                </Col>
            </Row>
        </Container>
    )
}

export default AuthPage