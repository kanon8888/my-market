import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const SocialLogin = () => {

    const { signInGoogle } = useAuth();
    const axiosSecure = useAxiosSecure();
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {

                const userInfo = {
                    email: result.user.email,
                    displayName: result.user.displayName,
                    photoURL: result.user.photoURL
                }

                axiosSecure.post('/users', userInfo)
                    .then(res => {
                        console.log('user data has been stored', res.data)
                        navigate(location.state || '/');
                    })

            })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <div className='text-center pb-8'>
            <p className='mb-2'>OR</p>

            <button
                onClick={handleGoogleSignIn}
                className="btn bg-white text-black border-[#e5e5e5]">

                Login with Google

            </button>

        </div>
    );
};

export default SocialLogin;