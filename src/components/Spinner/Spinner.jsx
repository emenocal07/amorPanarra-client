import { Container, Spinner } from 'react-bootstrap'


const LoadingSpinner = () => {

    return (
        <Container>
            <Spinner animation="grow" variant='warning' size="sm" />
            <Spinner animation="grow" variant='warning' />

        </Container>
    )
}

export default LoadingSpinner