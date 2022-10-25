import {FaInstagram, FaTiktok, FaLinkedin, FaYoutube} from 'react-icons/fa'

import './footer.sass'

const Footer = () => {
  return (
    <footer>
        <div className="container__footer">
            <div className="sociais">
                <FaInstagram/>
                <FaLinkedin/>
                <FaYoutube/>
                <FaTiktok />
            </div>
            <div className="copy">
                <p className='p__footer'>Direitos autorais Edu</p>
            </div>
            <div className="contato">

            </div>
        </div>
    </footer>
  )
}

export default Footer