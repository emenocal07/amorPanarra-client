import { useState, useContext } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { ProductsContext } from '../../context/Products.context'
import { MessageContext } from '../../context/UserMessage.context'
import productsService from '../../services/product.service'
import uploadService from '../../services/upload.service'


const NewProductForm = ({ closeModal }) => {

    const [productData, setProductData] = useState({
        name: '',
        description: '',
        ingredients: '',
        price: 0,
        image: '',
        glutenfree: false,
        featured: false
    })

    const { name, description, ingredients, price, weight, image, glutenfree, featured } = productData

    const handleInputChange = e => {

        let { name, value, type, checked } = e.currentTarget

        if (type === "checkbox") {
            value = checked
        }

        setProductData({
            ...productData,
            [name]: value
        })
    }

    // images config
    const [loadingImage, setLoadingImage] = useState(false)

    const uploadProductImage = e => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setProductData({ ...productData, image: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const { loadProducts } = useContext(ProductsContext)
    const { setShowMessage, setMessageInfo } = useContext(MessageContext)

    const handleSubmit = e => {
        e.preventDefault()

        productsService
            .createProduct(productData)
            .then(({ data }) => {
                setShowMessage(true)
                setMessageInfo({ title: 'Perfecto!', desc: 'Has creado un nuevo producto' })
                loadProducts()
                closeModal()
            })
            .catch(err => console.log(err))
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name" >
                <Form.Label>Nombre de producto:</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name='name' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description" >
                <Form.Label>Descripción:</Form.Label>
                <Form.Control as="textarea" rows={3} value={description} onChange={handleInputChange} name='description' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ingredients" >
                <Form.Label>Ingredientes:</Form.Label>
                <Form.Control as="textarea" rows={3} value={ingredients} onChange={handleInputChange} name='ingredients' />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="price" >
                        <Form.Label>Precio:</Form.Label>
                        <Form.Control type="number" value={price} onChange={handleInputChange} name='price' />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="weight" >
                        <Form.Label>Peso:</Form.Label>
                        <Form.Control type="number" value={weight || ''} onChange={handleInputChange} name='weight' />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="productImage" className="mb-3">
                <Form.Label>Seleccionar imagen</Form.Label>
                <Form.Control type="file" onChange={uploadProductImage} />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Check
                        type="checkbox"
                        id="checkbox"
                        label="Gluten Free"
                        checked={glutenfree || false}
                        onChange={handleInputChange}
                        name='glutenfree'
                    ></Form.Check>
                </Col>
                <Col>
                    <Form.Check
                        type="checkbox"
                        id="checkbox"
                        label="Featured"
                        checked={featured || false}
                        onChange={handleInputChange}
                        name='featured'
                    ></Form.Check>
                </Col>

            </Row>
            < div className="d-grid gap-2" >
                <Button variant="warning" type="submit" disabled={loadingImage}>{loadingImage ? 'Espere por favor...' : 'Crear nuevo producto'}</Button>
            </div>
        </Form >
    )
}


export default NewProductForm

