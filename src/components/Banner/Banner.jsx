import React from 'react';

import tesart from '../../assets/dop.webp';

const Banner = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</h1>
                <button className='btn btn-primary'>test test</button>
            </div>
            <div>
                <img className='w-100 h-100' src={tesart} alt="" />
            </div>
        </div>
    );
};

export default Banner;