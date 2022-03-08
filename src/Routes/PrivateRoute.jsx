import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import LoadingSpinner from "../components/Spinner/Spinner"
import { AuthContext } from "../context/Auth.context"


function PrivateRoute() {

    const { isLoggedIn, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (!isLoggedIn) {
        return <Navigate to="/inicio-sesion" />
    }

    return <Outlet />
}

export default PrivateRoute