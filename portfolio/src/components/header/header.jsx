import React, { useState, useEffect } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isScrolling ? 'scroll' : ''}`}>
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
                    <a href='#' onClick={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href='#' onClick={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href='#' onClick={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
