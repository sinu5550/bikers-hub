import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Button from '../../Button/Button';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import brandLogo from '../../../Images/bikers-hub.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/');
    }
    let Links = [
        { name: "Home", link: "/home" },
        { name: "Inventory", link: "/inventory" },
        { name: "Blogs", link: "/blogs" }

    ];
    let Links2 = [
        { name: "Manage Items", link: "/manage" },
        { name: "Add Items", link: "/addItems" },
        { name: "My Items", link: "/myItems" }

    ];
    let [open, setOpen] = useState(false);
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <nav className='shadow-md w-full z-50 fixed top-0 left-0'>
                <div className='md:flex items-center justify-between bg-black py-1 md:px-10 px-5'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center '>
                        <img onClick={handleLogoClick} src={brandLogo} width='200px' to='/' alt="BIKERS_HUB" />
                    </div>
                    <div onClick={() => setOpen(!open)} className='absolute right-5 top-5 cursor-pointer lg:hidden'>
                        {
                            open ?
                                <CgClose size={30} color='white'></CgClose> :
                                <CgMenuRight size={30} color='white'></CgMenuRight>
                        }
                    </div>
                    <ul className={`lg:flex lg:items-center lg:pb-0 pb-8 absolute lg:static  lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-6 transition-all duration-500 ease-in  ${open ? "top-16 bg-slate-900" : "top-[-500px]"}`}>

                        {
                            Links.map(link => (
                                <li key={link.name} className='lg:ml-5 text-md font-bold lg:my-0 my-6  '>
                                    <NavLink className={({ isActive }) =>
                                        (isActive ? "text-red-600 transition-all duration-500 " : "text-indigo-50 hover:text-red-300 transition-all duration-500")
                                    } to={link.link} >{link.name}</NavLink>

                                </li>
                            ))
                        }

                        {user ?

                            <div className='lg:flex items-center'>
                                {Links2.map(link => (
                                    <li key={link.name} className='lg:ml-5 text-md lg:my-0 my-6 font-bold'>
                                        <NavLink className={({ isActive }) =>
                                            (isActive ? "text-red-600 transition-all duration-500 " : "text-indigo-50 hover:text-red-300 transition-all duration-500")
                                        } to={link.link} >{link.name}</NavLink>

                                    </li>
                                ))}

                                <div className='lg:ml-8 '>
                                    <button onClick={handleSignOut}>
                                        <Button className='text-md '>
                                            Sign Out
                                        </Button>
                                    </button>

                                </div>
                            </div> :
                            <div className='lg:ml-8 '>
                                <Link to='/signUp' className='mr-6 text-indigo-50 py-2 px-5 border-2 border-red-700 transition-all duration-500 hover:bg-red-700 rounded'>

                                    Sign up

                                </Link>
                                <Link to='/login'>
                                    <Button className='text-md'>
                                        Login
                                    </Button>
                                </Link>
                            </div>
                        }
                    </ul>

                </div>

            </nav>
        </>
    );
};

export default Navbar;