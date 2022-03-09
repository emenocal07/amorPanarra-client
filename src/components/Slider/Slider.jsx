import { Carousel, Image } from 'react-bootstrap'
import './Slider.css'

const Slider = () => {

    return (
        <div>

            <Carousel variant='dark' className='sliderSize'>
                <Carousel.Item>
                    <Carousel.Caption className='letterSize'>
                        <Image className='sliderLogo' src='https://res.cloudinary.com/dabjtydsw/image/upload/v1646821266/amorPanarra_slide_1_jnydsz.png' />
                    </Carousel.Caption>
                    <Image

                        className="d-block w-100 fluid"
                        src="https://res.cloudinary.com/dabjtydsw/image/upload/dl_2,o_91,q_auto:good,z_0.5/v1646339981/IMG_20210518_125724_374_skarmc.webp"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption className='letterSize'>
                        <Image className='sliderLogo' src='https://res.cloudinary.com/dabjtydsw/image/upload/v1646821266/amorPanarra_slide_1_jnydsz.png' />

                    </Carousel.Caption>
                    <Image
                        className="d-block w-100 fluid"
                        src="https://res.cloudinary.com/dabjtydsw/image/upload/v1646762435/njt5opiacddyei98nqt6.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption className='letterSize'>
                        <Image className='sliderLogo' src='https://res.cloudinary.com/dabjtydsw/image/upload/v1646821266/amorPanarra_slide_1_jnydsz.png' />

                    </Carousel.Caption>
                    <Image
                        className="d-block w-100 fluid"
                        src="https://res.cloudinary.com/dabjtydsw/image/upload/v1646319950/Amor%20Panarra/slider3_kydzrh.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider