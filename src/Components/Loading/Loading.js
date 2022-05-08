import React from 'react';
import './Loading.css';

const Loading = () => {
    return (

        <div className='h-screen'>
            <div className='snippet' data-title=".dot-spin">
                <div className="stage">
                    <div className="dot-spin"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;