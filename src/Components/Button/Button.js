import React from 'react';

const Button = (props) => {
    return (
        <button className='bg-red-700 text-indigo-50 py-2 px-5 rounded  hover:bg-red-600 duration-500 '>
            {props.children}
        </button>
    );
};

export default Button;