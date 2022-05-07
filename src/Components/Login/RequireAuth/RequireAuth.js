import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-16'>
            <p className='text-red-700 text-xl'>Your Email is not verified!!</p>
            <p className='text-green-700 text-xl'> Please Verify your email address</p>
            <button
                className='bg-red-700 py-2 px-5 text-white rounded-md mt-10'
                onClick={async () => {
                    await sendEmailVerification();
                    toast.success('Email Sent');
                }}
            >
                Send Verification Email Again
            </button>

        </div>
    }

    return children;
};

export default RequireAuth;