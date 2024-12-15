import React from 'react';
import './headerContainer.css'

const HeaderContainer = () => {
        
    return (
        <>
            <div className="container row header-container">
                <div className="main-text col-lg-6 col-md-6 col-sm-12 col-xs-auto">
                    <h1 className='text-sm-center'>Hi, I'm Terry</h1>
                    <h2 className='text-sm-center'>Software Developer</h2>
                    <p className='text-sm-center'>I'm a passionate software developer driven by technology and innovation. I craft digital solutions that empower users and transform ideas into reality.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-auto d-flex justify-content-center align-items-center position-relative ">
                    <div className="image d-flex justify-content-center align-items-center">
                        <img src="/profile-ai.png" alt="profile image" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderContainer;