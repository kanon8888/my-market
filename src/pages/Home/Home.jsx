import React from 'react';
import Banner from '../../components/Banner/Banner';
import Dress from '../Dress/Dress';

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <Dress></Dress>
            </section>

        </div>
    );
};

export default Home;