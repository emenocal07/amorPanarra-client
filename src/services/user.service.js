import axios from 'axios'

class UsersService {
    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/users` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllUsers = () => {
        return this.api.get('/getAllUsers')
    }

    getOneUser = id => {
        return this.api.get(`/getOneUser/${id}`)
    }

    editUser = (user_id, userInfo) => {
        return this.api.put(`/edit/${user_id}`, userInfo)
    }

    deleteUser = user_id => {
        return this.api.delete(`/delete/${user_id}`)
    }
}
const usersService = new UsersService()

export default usersService