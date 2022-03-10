import { useState, useEffect, useContext } from "react"
import usersService from "../../services/user.service"
import UserDetails from "../../components/UserDetails/UserDetails"
<<<<<<< HEAD
import { AuthContext } from "../../context/Auth.context"
=======
import { useParams } from "react-router-dom"
>>>>>>> 9c48c84efbbc00eab94c504b64cd8d9589dfedbb


const UserDetailsPage = () => {

    const [userDetails, setUserDetails] = useState({})
    const [isloading, setisLoading] = useState(true)
    const { user_id } = useParams()
    const { user } = useContext(AuthContext)

    useEffect(() => {
        usersService
            .getOneUser(user_id)
            .then(({ data }) => {
                setUserDetails(data)
                setisLoading(false)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            {!isloading &&
                <>
                    <UserDetails userDetails={userDetails} />
                    <Container>
                        <Card.Body>
                            <Link to='/'>
                                <Button className='btn btn-outline-dark' variant="light" size='sm'><img style={{ width: '28px' }} src='https://res.cloudinary.com/dabjtydsw/image/upload/v1646900519/flecha2_laupdk.png' /></Button>
                                {/* <Button style={{ width: '' }} className='btn btn-outline-warning' variant="light">Volver</Button> */}
                            </Link>
                            <Link to={`/perfiles/editar/${user_id}`}><Button style={{ width: '10%' }} className='btn btn-outline-success' variant="light">Editar</Button></Link>
                            {(user?.role === 'ADMIN') &&
                                <Button style={{ width: '10%' }} className='btn btn-outline-danger' variant="light" onClick={() => deleteProfile()}>Eliminar</Button>
                            }
                        </Card.Body>
                    </Container>
                </Container>
            }
        </>
    )
}

export default UserDetailsPage