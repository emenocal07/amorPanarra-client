import axios from 'axios'

class ProductsService {
    constructor() {

        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/products` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllProducts = () => {
        return this.api.get('/getAllProducts')
    }

    getOneProduct = id => {
        return this.api.get(`/getOneProduct/${id}`)
    }

    createProduct = product => {
        return this.api.post(`/createProduct`, product)
    }

    editProduct = (product_id, productInfo) => {
        return this.api.put(`/edit/${product_id}`, productInfo)
    }

    deleteProduct = product_id => {
        return this.api.delete(`/delete/${product_id}`)
    }
}
const productsService = new ProductsService()

export default productsService