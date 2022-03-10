import { Container, Row, Col, Image } from "react-bootstrap"
import './AboutUs.css'

const AboutUs = () => {

    return (
        <>
            <Container className='aboutUs'>
                <h1>Nosotros</h1>
                <hr />
                <Row>
                    <Col className='aboutText'>
                        <p>Somos la cuarta generación de un negocio tradicional familiar fundado en 1886 donde elaboramos la panadería como antaño. Es decir, nuestra panadería se elabora mezclando harina, agua y sal. Sólo trabajamos con productos 100% naturales y ecológicos de primera calidad.</p>
                        <p>Nos dedicamos en exclusiva a repartir a domicilio nuestros productos recien horneados para que puedas degustarlos con tu familia.</p>
                        <p>¡Nuestra masa madre está esperando para convertirse en pan! Sólo tienes que realizar el pedido en nuestra web y lo recibirás en 24h-48h en tu domicilio. Realizamos el reparto en Madrid capital.</p>
                        {/* <Image className='rounded' style={{ width: '100%' }} src='https://res.cloudinary.com/dabjtydsw/image/upload/q_71/v1646834990/20210525_174127_ztioeq.webp' /> */}
                    </Col>
                    <Col>
                        <Image className='rounded fixed' style={{ width: '100%', height: '80%' }} src='https://res.cloudinary.com/dabjtydsw/image/upload/v1646828830/IMG_20210602_090122_573_pcuzk3.webp' />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutUs