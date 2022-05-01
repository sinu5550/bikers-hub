import React from 'react';

const Button = (props) => {
    return (
        <button className='bg-slate-900 text-white py-2 px-5 rounded md:ml-8 hover:bg-slate-600 duration-500 '>
            {props.children}
        </button>
    );
};

export default Button;