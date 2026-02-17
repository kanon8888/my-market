import React from 'react';

import Dress from '../Dress/Dress';
import { useLoaderData } from 'react-router';


const Product = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <section>
               
                <Dress data={data}></Dress>
            </section>
        </div>
    );
};

export default Product;