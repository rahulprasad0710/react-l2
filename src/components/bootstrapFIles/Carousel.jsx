import React from "react";

const Carousel = () => {
    return (
        <div id='carouselExample' className='carousel slide'>
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <img
                        src='https://plus.unsplash.com/premium_photo-1673283380425-0f41f67db1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                        className='d-block w-100 carousel-img img-fluid'
                        alt='...'
                    />
                </div>
                <div className='carousel-item'>
                    <img src='...' className='d-block w-100' alt='...' />
                </div>
                <div className='carousel-item'>
                    <img src='...' className='d-block w-100' alt='...' />
                </div>
            </div>
            <button
                className='carousel-control-prev'
                type='button'
                data-bs-target='#carouselExample'
                data-bs-slide='prev'>
                <span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'></span>
                <span className='visually-hidden'>Previous</span>
            </button>
            <button
                className='carousel-control-next'
                type='button'
                data-bs-target='#carouselExample'
                data-bs-slide='next'>
                <span
                    className='carousel-control-next-icon'
                    aria-hidden='true'></span>
                <span className='visually-hidden'>Next</span>
            </button>
        </div>
    );
};

export default Carousel;
