import { useState, useEffect, useContext } from "react"
import usersService from "../../services/user.service"
import UserDetails from "../../components/UserDetails/UserDetails"
import { useParams } from "react-router-dom"


const UserDetailsPage = () => {

    const [userDetails, setUserDetails] = useState({})
    const [isloading, setisLoading] = useState(true)
    const { user_id } = useParams()

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
                </>
            }
        </>
    )
}

export default UserDetailsPage