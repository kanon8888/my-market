import React from 'react';
import Banner from '../../components/Banner/Banner';
import Dress from '../Dress/Dress';
import { useLoaderData } from 'react-router';
import Icon from '../Icon/Icon';

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className="space-y-10">
            <section>
                <Banner></Banner>
            </section>
            <section className='bg-amber-400'>
                <Icon></Icon>
            </section>
            <section>
                <Dress data={data}></Dress>
            </section>
        </div>
    );
};

export default Home;