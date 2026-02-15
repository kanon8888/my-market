import React from 'react';
import Banner from '../../components/Banner/Banner';
import Dress from '../Dress/Dress';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <Dress data={data}></Dress>
            </section>

        </div>
    );
};

export default Home;