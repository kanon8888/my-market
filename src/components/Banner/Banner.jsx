import React from 'react';

import tesart from '../../assets/Olive-Front.webp';

const Banner = () => {
    return (
        <div>
            <div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</h1>
                <button className='btn btn-primary'>test test</button>
            </div>
            <div>
                <img src={tesart} alt="" />
            </div>
        </div>
    );
};

export default Banner;