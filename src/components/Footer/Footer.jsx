import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {

    return (
        <footer>
            {/* <section className='subfooter'>
                <ul >
                    <Link to='/nosotros'><li>SOBRE NOSOTROS</li></Link>
                    <br />
                    <Link to='/contacto'><li>CONTACTO</li></Link>
                </ul>

            </section> */}


            <section className='footerEnd' style={{ backgroundColor: '#ffc107' }}>
                &copy; {new Date().getFullYear()} Copyright:{' '}  Developed by Ernesto & Anna
            </section>
        </footer >
    )
}

export default Footer