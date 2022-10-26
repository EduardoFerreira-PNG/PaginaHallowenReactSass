import {FaInstagram, FaTiktok, FaLinkedin, FaYoutube} from 'react-icons/Fa'

import './footer.sass'

const Footer = () => {
  return (
    <footer>
        <div className="container__footer">
            <div className="sociais">
                <li><FaInstagram id="insta-icon"/></li>
                <li></li><FaLinkedin id="linkedin-icon"/>
                <li></li><FaYoutube id="youtube-icon"/>
                <li></li><FaTiktok id="tiktok-icon"/>
            </div>
            <div className="copy">
                <p>Direitos autorais © Edu - 2022</p>
            </div>
            <div className="contato">
                <p>eduardonaves02@outlook.com</p>    
            </div>
        </div>
    </footer>
  )
}

export default Footer