import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import { CgMenuRight, CgClose } from 'react-icons/cg';

const Navbar = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "INVENTORY", link: "/inventory" },
        { name: "BLOGS", link: "/blogs" }

    ];
    let [open, setOpen] = useState(false);
    return (
        <>
            <nav className='shadow-md w-full z-auto fixed top-0 left-0'>
                <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-5'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center font-mono text-gray-800'>
                        Bikers_Hub
                    </div>
                    <div onClick={() => setOpen(!open)} className='absolute right-5 top-5 cursor-pointer md:hidden'>
                        {
                            open ?
                                <CgClose size={30}></CgClose> :
                                <CgMenuRight size={30}></CgMenuRight>
                        }
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-6 transition-all duration-500 ease-in  ${open ? "top-16" : "top-[-500px]"}`}>
                        {
                            Links.map(link => (
                                <li key={link.name} className='md:ml-10 text-lg md:my-0 my-6'>
                                    <Link className='text-gray-800 hover:text-gray-400 duration-500 cursor-pointer' to={link.link} >{link.name}</Link>
                                </li>
                            ))
                        }
                        <Button className='text-lg'>
                            LOGIN
                        </Button>
                    </ul>

                </div>

            </nav>
        </>
    );
};

export default Navbar;