import './index.scss'
import {Link, NavLink} from 'react-router-dom';
import logo from '../../assets/images/logo_name.png';
import logosub from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faUniversity } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to='/'>
        <img src={logosub} alt="logo" />
        <img className='sub-logo' src={logo} alt="logosub" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' 
                rel='noreferrer' 
                href="https://www.linkedin.com/in/mittul-sharma-38015965/">
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>

            <li>
                <a target='_blank' 
                rel='noreferrer' 
                href="https://github.com/sharma-mitneu">
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>

            <li>
                <a target='_blank' 
                rel='noreferrer' 
                href="https://www.northeastern.edu/">
                    <FontAwesomeIcon icon={faUniversity} color='#4d4d4e'/>
                </a>
            </li>
            
        </ul>
    </div>
)

export default Sidebar;