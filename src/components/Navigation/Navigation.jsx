import { useState, useContext } from 'react'
import { Navbar, Nav, Container, Modal } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/Auth.context'
import NewProductForm from '../NewProductForm/NewProductForm'
import './Navigation.css'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import { CartContext } from '../../context/Cart.context'



const Navigation = () => {

    const [showModal, setShowModal] = useState(false)

    const handleModalOpen = () => setShowModal(true)
    const handleModalClose = () => setShowModal(false)

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
    const { emptyCart } = useContext(CartContext)

    const logOutAndEmptyCart = () => {
        logOutUser()
        emptyCart()
    }

    return (
        <>
            <Navbar className='navbar' collapseOnSelect expand="lg" bg="warning" variant="light">
                <Container>
                    <NavLink to="/">
                        <Navbar.Brand as='span'> <img
                            src="https://res.cloudinary.com/dabjtydsw/image/upload/v1646821362/amorPanarra_logoNav_1_f41bci.png"
                            width="120"
                            height="50"
                            className="d-inline-block align-top"
                            alt="Amor Panarra logo"
                        /></Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        {(user?.role === 'ADMIN') &&
                            <Nav className="me-auto">
                                <Nav.Link as='span' onClick={handleModalOpen} style={{ cursor: 'pointer' }}>Crear Producto</Nav.Link>
                                <NavLink to="/perfiles">
                                    <Nav.Link as='span' >Usuarios</Nav.Link>
                                </NavLink>
                            </Nav>
                        }

                        {!isLoggedIn ?
                            <>
                                <NavLink className='ms-auto' to="/inicio-sesion">
                                    <Nav.Link as='span' >Mi cuenta</Nav.Link>
                                </NavLink>
                            </>
                            :
                            <>
                                <NavLink className='ms-auto' to={`/perfiles/${user?._id}`}>
                                    <Nav.Link as='span' >Hola {user?.username}!</Nav.Link>
                                </NavLink>
                                <Nav.Link as='span' onClick={() => logOutAndEmptyCart()} style={{ cursor: 'pointer' }}>Cerrar sesión</Nav.Link>
                            </>
                        }
                        <NavLink to="/detalles-pedido">
                            <Nav.Link eventKey={2} as='span'>
                                <ShoppingCart />
                            </Nav.Link>
                        </NavLink>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal className='modal' show={showModal} onHide={handleModalClose} size='md'>
                <Modal.Header closeButton>
                    <Modal.Title>Crear producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewProductForm closeModal={handleModalClose} />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default Navigation