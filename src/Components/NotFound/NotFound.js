import React from 'react';
import Button from '../Button/Button';

const NotFound = () => {
    return (
        <div className='pt-40 py-16'>
            <div className='  text-center'>
                <p className='text-red-600 text-5xl'>404 error <br /> Page not found</p>
                <div className='mt-40'>
                    <Button>Back to Home</Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;