import './Footer.css'
import { ExternalLink } from 'react-external-link'


const Footer = () => {

    return (
        <footer>

            <div className='subfooter'>
                <ExternalLink href='https://www.instagram.com/amorpanarra/?hl=es'>
                    <span><img style={{ width: '43px' }} src="https://res.cloudinary.com/dabjtydsw/image/upload/v1646913561/instagram_tmjusu.png" alt="Logo instagram" /></span>
                </ExternalLink>
            </div>
            &copy; {new Date().getFullYear()} Copyright:{' '}  Developed by Ernesto & Anna | Política de privacidad | Aviso legal
        </footer >
    )
}

export default Footer