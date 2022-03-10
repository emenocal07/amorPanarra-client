import { useState, useEffect, useContext } from "react"
import usersService from "../../services/user.service"
import UserDetails from "../../components/UserDetails/UserDetails"
import { AuthContext } from "../../context/Auth.context"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"



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
                <Container>
                    <UserDetails userDetails={userDetails} />
                </Container>
            }
        </>
    )
}

export default UserDetailsPage