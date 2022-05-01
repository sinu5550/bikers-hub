import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../../Button/Button';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import brandLogo from '../../../Images/bikers-hub.png';

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/');
    }
    let Links = [
        { name: "HOME", link: "/" },
        { name: "INVENTORY", link: "/inventory" },
        { name: "BLOGS", link: "/blogs" }

    ];
    let [open, setOpen] = useState(false);
    return (
        <>
            <nav className='shadow-md w-full z-auto fixed top-0 left-0'>
                <div className='md:flex items-center justify-between bg-black py-1 md:px-10 px-5'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center '>
                        <img onClick={handleLogoClick} src={brandLogo} width='200px' to='/' alt="BIKERS_HUB" />
                    </div>
                    <div onClick={() => setOpen(!open)} className='absolute right-5 top-5 cursor-pointer md:hidden'>
                        {
                            open ?
                                <CgClose size={30} color='white'></CgClose> :
                                <CgMenuRight size={30} color='white'></CgMenuRight>
                        }
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-6 transition-all duration-500 ease-in  ${open ? "top-16 bg-slate-900" : "top-[-500px]"}`}>
                        {
                            Links.map(link => (
                                <li key={link.name} className='md:ml-10 text-lg md:my-0 my-6 '>
                                    <NavLink className={({ isActive }) =>
                                        (isActive ? "text-red-600 transition-all duration-500 " : "text-indigo-50 hover:text-red-400 transition-all duration-500")
                                    } to={link.link} >{link.name}</NavLink>

                                </li>
                            ))
                        }
                        <div className='md:ml-8'>
                            <Button className='text-lg'>
                                LOGIN
                            </Button>
                        </div>
                    </ul>

                </div>

            </nav>
        </>
    );
};

export default Navbar;