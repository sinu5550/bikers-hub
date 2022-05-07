import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import brandLogo from '../../Images/bikers-hub.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer className="footer p-10 bg-slate-800 text-neutral-content mt-[15%]">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/home' className="link link-hover">Home</Link>
                    <Link to='/inventory' className="link link-hover">Inventory</Link>
                    <Link to='/blogs' className="link link-hover">Blogs</Link>
                    <Link to='/about' className="link link-hover">About</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <footer className="footer px-10 py-4  bg-slate-800 text-neutral-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img src={brandLogo} alt="BIKERS_HUB" width='150px' />
                    <p>BIKERS HUB LTD. <br /><small>Copyright ©️ {year} All rights reserved by Bikers Hub</small> </p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 items-center cursor-pointer ">
                        <a href="https://www.facebook.com/intisarahmed.siyan.1" target="_blank" rel='noreferrer'><BsFacebook size={32} className='' color='white'></BsFacebook></a>
                        <a href="https://www.linkedin.com/in/siyan5550/" target="_blank" rel='noreferrer'><BsLinkedin size={30} className='' color='white'></BsLinkedin></a>
                        <a href="https://www.linkedin.com/in/siyan5550/" target="_blank" rel='noreferrer'><AiFillTwitterCircle size={38} className='' color='white'></AiFillTwitterCircle></a>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;