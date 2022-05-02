import React from 'react';
import './Banner.css';
import bikeImg from '../../../Images/banner-img.png';
import brandLogo from '../../../Images/bikers-hub.png';

const Banner = () => {
    return (
        <div>
            <div className='banner grid grid-cols-2 '>
                <div className='mt-16 md:mt-0 col-span-2 md:col-span-1 text-white banner-title flex flex-col justify-center items-center md:ml-28'>

                    <h1 data-aos="fade-down" className='mt-0'>SUPER OFFER</h1>

                    <p className='text-center text-xl '>R15 V3 <br />(Indian Version)</p>
                    <p className='text-center text-xl font-bold'>BDT <del>525,000</del> | BDT 360,000</p>
                    <p className='text-center text-xl font-bold'>Speed is Reborn</p>
                    <div className='flex flex-col items-center'>
                        <p className='text-center'>Racing Instinct -
                            Passing on the "R series" DNA
                        </p>
                        <img src={brandLogo} width='150' to='/' className='mb-0' alt="BIKERS_HUB" />
                    </div>

                </div>
                <div data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1000" className='w-full my-4 col-span-2  md:col-span-1 '>
                    <img src={bikeImg} alt="R15 V3" />
                </div>
            </div>
        </div>
    );
};

export default Banner;