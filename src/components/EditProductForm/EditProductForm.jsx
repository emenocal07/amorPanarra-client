import { useContext, useEffect, useState } from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import productsService from '../../services/product.service'
import uploadService from '../../services/upload.service'
import { MessageContext } from '../../context/UserMessage.context'


const EditProductForm = () => {

    const [productDetails, setProductDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { product_id } = useParams()
    const { name, description, ingredients, price, weight, image, glutenfree, featured, } = productDetails

    useEffect(() => {
        productsService
            .getOneProduct(product_id)
            .then(({ data }) => {
                setProductDetails(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    const handleInputChange = e => {
        let { name, value, type, checked } = e.target

        const finalValue = type === "checkbox" ? checked : value

        setProductDetails({
            ...productDetails,
            [name]: finalValue
        })
    }

    const { setShowMessage, setMessageInfo } = useContext(MessageContext)
    const navigate = useNavigate()


    //image config
    const [loadingImage, setLoadingImage] = useState(false)

    const uploadProductImage = e => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setProductDetails({ ...productDetails, image: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }



    const handleSubmit = e => {
        e.preventDefault()

        productsService
            .editProduct(product_id, productDetails)
            .then(({ data }) => {
                setShowMessage(true)
                setMessageInfo({ title: 'Perfecto!', desc: 'Has modificado el producto' })
                navigate('/')
            })
            .catch(err => console.log(err))
    }


    return isLoading
        ? <h1>Cargando</h1>
        : (
            <Container >
                <Row className='justify-content-center'>
                    <Col md={6} >
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
                                        <Form.Control type="number" value={weight} onChange={handleInputChange} name='weight' />
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
                                        checked={glutenfree}
                                        onChange={handleInputChange}
                                        name='glutenfree'
                                    ></Form.Check>
                                </Col>
                                <Col>
                                    <Form.Check
                                        type="checkbox"
                                        id="checkbox"
                                        label="Featured"
                                        checked={featured}
                                        onChange={handleInputChange}
                                        name='featured'
                                    ></Form.Check>
                                </Col>

                            </Row>
                            < div className="d-grid gap-2 mb-3" >
                                <Button variant="warning" type="submit" disabled={loadingImage}>{loadingImage ? 'Espere por favor...' : 'Editar producto'}</Button>
                            </div>
                            <br />
                        </Form >
                    </Col>
                </Row>
            </Container>
        )
}


export default EditProductForm

