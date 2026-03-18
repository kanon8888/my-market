import React from 'react';
import { Outlet } from 'react-router';
import authImage from '../assets/dalyvare-image.jpg';

const AuthLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl'>Home</h2>
            <div className='flex items-center'>
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