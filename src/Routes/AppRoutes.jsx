import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AuthPage from '../pages/AuthPage/AuthPage'
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage'
import UsersListPage from '../pages/UsersListPage/UsersListPage'
import UserDetailsPage from '../pages/UserDetailsPage/UserDetailsPage'
import CartPage from '../pages/CartPage/CartPage'
import PaymentPage from '../pages/PaymentPage/PaymentPage'
import PrivateRoute from './PrivateRoute'
import EditProductPage from '../pages/EditProductPage/EditProductPage'
import PrivateRoute from './PrivateRoute'
import EditUserPage from '../pages/EditUserPage/EditUserPage'

const AppRoutes = () => {


    return (
        <Routes>

            <Route path='/' element={<HomePage />} />

            <Route path='/inicio-sesion' element={<AuthPage />} />

            <Route path='/productos/:product_id' element={<ProductDetailsPage />} />

            <Route path='/productos/editar/:product_id' element={<EditProductPage />} />

            <Route path='/perfiles' element={<UsersListPage />} />

            <Route path='/perfiles/:user_id' element={<PrivateRoute />} >
                <Route path='' element={<UserDetailsPage />} />
            </Route>

            <Route path='/perfiles/editar/:user_id' element={<EditUserPage />} />

            <Route path='/detalles-pedido' element={<CartPage />} />

            <Route path='/finalizar-compra' element={<PrivateRoute />}>
                <Route path='' element={<PaymentPage />} />
            </Route>

            <Route path="*" element={<h1>404</h1>} />



        </Routes >



    )
}

export default AppRoutes