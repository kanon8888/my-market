import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../socialLogin/socialLogin';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser } = useAuth();

    const handleRegistration = (data) => {
        console.log('after register', data);
        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
            })
            .catch(errors => {
                console.log(errors);
            })

    }

    return (

        <div className="card w-full max-w-sm shrink-0 shadow-2xl">
            <h3 className="text-3xl text-center">Welcome To Register</h3>
            <p className='text-center'>Please Register</p>
            <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email"
                        {...register('email', { required: true })}
                        className="input" placeholder="Email" />
                    {errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}

                    {/* photo image field  */}
                    <label className="label">Photo</label>

                    <input type="file" {...register('photo', { required: true })} className="file-input" placeholder="Your Photo" />
                    {errors.name?.type === 'required' && <p className='text-red-500'>Photo is required</p>}

                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password"
                        {...register('password', {
                            required: true,
                            minLength: 6,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()[\]{}\-_=+.,<>/\\|~`]).{8,}$/

                        })}
                        className="input" placeholder="Password" />
                    {
                        errors.password?.type === 'required' && <p className='text-red-500'>Password is required.</p>
                    }
                    {
                        errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters or longer</p>
                    }
                    {
                        errors.password?.type === 'pattern' && <p className='text-red-500'>
                            Password Must have at lest one uppercase, at least one lowercase, at least one number and least one special characters
                        </p>
                    }
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                <p>Already have an account<Link state={location.state} className='text-blue-400 text-center underline' to="/login">Login</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;