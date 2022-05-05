import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../Hooks/useItemDetails';
// import brandLogo from '../../Images/bikers-hub.png';
import Button from '../Button/Button';

const ItemDetails = () => {
    const { itemsId } = useParams();
    const [inventory] = useItemDetails(itemsId);
    return (
        <div>
            <div className='shadow-lg w-11/12 mx-auto p-4  bg-white self-auto card my-28'>
                <div className='grid grid-cols-2 '>
                    <div className='w-full col-span-2 md:col-span-1'>
                        <img className='mx-auto' src={inventory.img} alt={inventory.productName} />
                    </div>
                    <div className='md:pr-16 my-auto col-span-2 md:col-span-1'>
                        <div className='mx-auto font-[poppins]'>
                            <div className='flex justify-between mb-5'>
                                <h1 className=' font-bold mt-4 md:mt-0 uppercase text-4xl'>
                                    {inventory.productName}
                                </h1>
                                {/* <div>
                                    <img src={brandLogo} width='150px' alt="BIKERS_HUB" />
                                </div> */}
                            </div>
                            <p> <span className='font-bold '>Price:</span>  BDT {inventory.price}</p>
                            <h1 className='font-bold text-xl mt-3'>
                                About <span className='uppercase'>{inventory.productName}</span>
                            </h1>
                            <p>{inventory.description}</p>
                            <p className='mt-3'> <span className='font-bold'>Supplier Name: </span> {inventory.supplier}</p>
                            <div className='bg-gray-900 text-white w-[120px] rounded-full mt-3 mb-10'>
                                <p className='text-center'>  In Stock: {inventory.quantity}</p>

                            </div>
                            <div className='lg:flex lg:justify-between '>
                                <div className='flex items-center justify-center'>
                                    <input className='h-[40px] w-[150px] outline-none  border-b-2 ' type="number" onwheel="this.blur()" id="quantity" name="quantity" placeholder='Increase Quantity' />
                                    <label for="quantity" className='bg-sky-600 text-white px-2 py-[8px] rounded'><button >Increase</button></label>
                                </div>

                                <div className='flex justify-center mt-10 lg:mt-0'>
                                    <Button>DELIVERED</Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ItemDetails;