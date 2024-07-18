import React from 'react';
import './headerContainer.css'

const HeaderContainer = () => {
        
    return (
        <>
            <div className="container row header-container">
                <div className="main-text col-lg-6 col-md-4 col-sm-6 col-xs-auto">
                    <h1 className='text-sm-center'>Hi, I'm Terry</h1>
                    <h2 className='text-sm-center'>Software Developer</h2>
                    <p className='text-sm-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quisquam laudantium doloribus dolore quam tempore harum vitae nam a!</p>
                </div>
                <div className="col-lg-6 col-md-4 sm-6 col-xs-auto d-flex justify-content-center align-items-center position-relative">
                    <div className="image d-flex justify-content-center align-items-center">
                        <div className="blob"></div>
                        <img src="/profile.png" alt="profile image" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderContainer;