import React from 'react';

const Advertisement = () => {
    return (
        <div>
            <div className='px-6 py-12 bg-primary rounded my-10'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-sm sm:text-4xl lg:text-5xl font-bold text-white'>up to 50% off</h1>
                    <p className='text-xs sm:text-sm lg:text-xl text-white'>Plus free shipping! Use code <a href="https://www.amazon.com/" target='_blank' className='font-bold'>GTP Blog 99+</a></p>
                    <a href='https://www.amazon.com/' target='_blank'><button className='text-white rounded-md border text-xs sm:text-sm lg:text-xl border-white py-3 px-5'>Shop Now</button></a>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;