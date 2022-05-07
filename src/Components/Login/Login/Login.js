import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import './Login.css';
import Button from '../../Button/Button';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Loading/Loading';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // =================================== using firebase react hook ====================================

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error, ,
    ] = useSignInWithEmailAndPassword(auth);


    if (user) {
        navigate(from, { replace: true });
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);


    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Reset Password Email Sent');
        }
        else {
            toast.error('Enter Your Email Address');
        }
    }
    if (loading || sending) {
        return <Loading></Loading>;
    }


    return (
        <div className='pb-8'>
            <div className=' input-container py-3 shadow-md '>
                <h3 className='text-center title mb-5'>Login to Continue</h3>
                <form onSubmit={handleSubmit} >
                    <input className='mb-4 ' type="email" ref={emailRef} name="email" id="email" placeholder='Enter Your Email' required />
                    <input type="password" ref={passwordRef} name="password" id="password" placeholder='Password' required />
                    <button onClick={resetPassword} className='anchor-btn  pl-5'>Forgot Password?</button>

                    {
                        error && <p className="text-red-700 ml-5">{error.message}</p>
                    }
                    <div className='flex justify-center'>
                        <button type="submit" className=' mt-2 px-4 py-2'> <Button>Login</Button> </button>
                    </div>
                </form>
                <SocialLogin />
                <div className='flex justify-center items-center mb-5'>
                    <p className='mt-2 mb-0'>Don't have an account? <Link to='/signup' className='anchor-btn '>Sign Up</Link></p>
                </div>


            </div>
        </div>
    );
};

export default Login;