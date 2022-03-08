import { Carousel } from 'react-bootstrap'
import './Slider.css'

const Slider = () => {

    return (
        <div>

            <Carousel variant='dark' className='sliderSize'>
                <Carousel.Item>
                    <Carousel.Caption className='letterSize'>
                        <h1>Panadería artesana desde 1886</h1>
                        <h5>Elaboramos todos nuestros productos con ingredientes ecológicos.</h5>
                    </Carousel.Caption>
                    <img

                        className="d-block w-100"
                        src="https://res.cloudinary.com/dabjtydsw/image/upload/v1646319946/Amor%20Panarra/slider1_pi9tnf.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption className='letterSize'>
                        <h1>Panadería artesana desde 1886</h1>
                        <h5>Elaboramos todos nuestros productos con ingredientes ecológicos.</h5>
                    </Carousel.Caption>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dabjtydsw/image/upload/v1646319947/Amor%20Panarra/slider2_znl526.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption className='letterSize'>
                        <h1>Panadería artesana desde 1886</h1>
                        <h5>Elaboramos todos nuestros productos con ingredientes ecológicos.</h5>
                    </Carousel.Caption>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dabjtydsw/image/upload/v1646319950/Amor%20Panarra/slider3_kydzrh.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider