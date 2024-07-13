import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <header>
            <div className='d-flex justify-content-between align-items-center w-100 h-100 inner'>
                <div className="logo">
                    <h2>
                        <span>&lt;</span>

                        <div className='logo-lg'>TerryKrom</div>
                        <div className='logo-sm'>TK</div>

                        <span>/</span>
                        <span>&gt;</span>
                    </h2>
                </div>
                <nav className="nav-links">
                    <a href={''} target='_blank'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href={'#'} target='_blank'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href={'#'} target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;