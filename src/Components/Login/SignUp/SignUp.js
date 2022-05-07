import React from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();

    // =============================== using firebase react hook ====================================
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error

    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);

    if (user) {
        navigate('/home')
    }
    //  ========================= handling sign up button ==============================================

    const handleSignUp = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password, name)

        await sendEmailVerification();
        toast.success('Email Verification Code Send');


    }
    if (loading) {
        return <Loading></Loading>;
    }


    return (
        <div className='pb-8'>

            <div className=' input-container py-3 '>
                <h3 className='text-center title mb-5 '>Create  Account</h3>
                <form onSubmit={handleSignUp}>
                    <input className='mb-4 ' type="text" name="name" id="name" placeholder='Your Full Name' required />
                    <input className='mb-4 ' type="email" name="email" id="email" placeholder='Enter Your Email' required />
                    <input type="password" name="password" id="password" placeholder='Password' required />

                    {
                        error && <p className="text-red-700 ml-5">{error.message}</p>
                    }
                    <div className='flex justify-center'>
                        <button type="submit" className=' mt-4 px-4 py-2 bg-red-700 text-indigo-50   rounded  hover:bg-red-600 duration-500'> Sign up </button>
                    </div>
                </form>
                <SocialLogin />
                <div className='flex justify-center items-center mb-5'>
                    <p className='mt-2 mb-0'>Already have an account? <Link to='/login' className='anchor-btn '>Sign in</Link></p>
                </div>
            </div>
        </div>

    );
};

export default SignUp;