import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { FcGoogle } from 'react-icons/fc';
import './SocialLogin.css';

const SocialLogin = () => {
    // ===================== using google firebase react hook ==========================

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    let loadingHandle;
    if (error) {
        errorElement = <div>
            <p className='text-red-600 ml-5'> {error?.message}</p>
        </div>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div>
                <div className='flex justify-center items-center'>
                    <div className='bg-gray-400 w-1/2 ml-5' style={{ height: '2px' }}></div>
                    <p className=' px-2 mb-1'> or </p>
                    <div className='bg-gray-400 w-1/2 mr-5' style={{ height: '2px' }}></div>
                </div>
                {loadingHandle}
                {errorElement}
            </div>
            <div >
                <button onClick={() => signInWithGoogle()} className='bg-white  rounded-full shadow-signin flex items-center py-2 px-4  mx-auto mb-5'><FcGoogle size={30} /> <span className='ml-2'>Sign in with Google</span></button>

            </div>
        </div>
    );
};

export default SocialLogin;