import React from 'react';
import { Outlet } from 'react-router';
import authImage from '../assets/dalyvare-image.jpg';

const AuthLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='flex'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img src={authImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;