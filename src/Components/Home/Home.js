import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Header/Banner/Banner';
import useInventory from '../Hooks/useInventory';
import ItemsCart from '../InventoryItems/ItemsCart/ItemsCart';
import { GrMapLocation } from 'react-icons/gr'
import { BsTelephoneOutbound } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import './Home.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';




const Home = () => {
    const [inventory] = useInventory();
    const [user] = useAuthState(auth);
    const handleContactUs = () => {
        if (!user) {
            toast.info('Sign In First');
        }
    }
    return (
        <div>

            <Banner></Banner>
            <section className='pb-10'>
                <h1 className='text-center flex-none font-bold text-3xl font-[poppins] uppercase mt-10  '>  inventory <span className='text-red-700'>items</span></h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-8  container mx-auto'>
                    {
                        inventory.slice(0, 6).map(inventory => <ItemsCart key={inventory._id} inventory={inventory} ></ItemsCart>)
                    }
                </div>
            </section>
            <p className='text-center text-xl'> <Link to='/manage' className='link link-primary'>Manage Inventory  </Link> </p>

            {/* ===================== Bonus Sections =================== */}
            <section className="w-full bg-slate-800 text-indig-50 p-5 my-5">
                <div className="w-11/12 mx-auto py-8">
                    <div className="flex flex-col md:flex-row md:justify-between items-center justify-center">
                        <div className="">
                            <h2 className="font-bold text-3xl text-white">Subscribe For Daily Updates</h2>
                        </div>
                        <div className="flex mt-5 md:mt-0">
                            <input type="text" className="outline-none p-2" placeholder="Enter E-mail" />
                            <button className="btn btn-light rounded-none font-bold" type="button"> Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-11/12   pt-5 ">
                <div className="grid grid-cols-3 ">
                    <div className="col-span-3 lg:col-span-2 mx-auto flex flex-col justify-center mb-8">
                        <h1 className='text-2xl font-bold'>GET IN TOUCH WITH US</h1>
                        <div className='flex items-center'>
                            <div className='mr-5'>
                                <GrMapLocation size={35} />
                            </div>
                            <div>
                                <p className='text-2xl'>Location</p>
                                <p>ACI Centre, 245 Tejgaon Industrial Area, Dhaka 1208.</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-8'>
                            <div className='mr-5'>
                                <BsTelephoneOutbound size={35} />
                            </div>
                            <div>
                                <p className='text-2xl'>Phone Number</p>
                                <p>+8801900000000</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-8'>
                            <div className='mr-5'>
                                <HiOutlineMail size={40} />
                            </div>
                            <div>
                                <p className='text-2xl'>Email Address</p>
                                <p>service@bikers-hub.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 lg:col-span-1 flex justify-center">
                        <div className='bg-slate-200 shadow py-8 w-full rounded-lg'>
                            <h2 className="text-center font-bold text-xl">Contact Us</h2>
                            <div className="w-full ">
                                <form onSubmit={handleContactUs} className='contact-us'>

                                    <input type="text" placeholder="Your name.." required />


                                    <input type="email" placeholder="Your Email.." required />

                                    <input type="number" placeholder="Phone Number" />

                                    <textarea type="text" placeholder="Write anything....." required ></textarea>
                                    <input type="submit" className='bg-red-700 text-indigo-50 cursor-pointer' value="Submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home; 