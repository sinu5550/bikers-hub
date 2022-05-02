import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../Hooks/useItemDetails';
import brandLogo from '../../Images/bikers-hub.png';

const ItemDetails = () => {
    const { itemsId } = useParams();
    const [inventory] = useItemDetails(itemsId);
    return (
        <div>
            <h1 className='mt-28 font-bold text-2xl text-center'>You are about to book: {inventory.productName}</h1>
            <div className='shadow-lg w-11/12 mx-auto p-4  bg-white self-auto card '>
                <div className='grid grid-cols-2 '>
                    <div className='w-full col-span-2 md:col-span-1'>
                        <img className='mx-auto' src={inventory.img} alt={inventory.productName} />
                    </div>
                    <div className='md:pr-28 my-auto col-span-2 md:col-span-1'>
                        <div className='mx-auto'>
                            <div className='flex justify-between'>
                                <h1 className=' font-bold font-[poppins] uppercase text-5xl'>
                                    {inventory.productName}
                                </h1>
                                <div>
                                    <img src={brandLogo} width='150px' alt="BIKERS_HUB" />
                                </div>
                            </div>
                            <p> <span className='font-bold '>Price:</span>  BDT {inventory.price}</p>
                            <h1 className='font-bold text-2xl '>
                                About {inventory.productName}
                            </h1>
                            <p>{inventory.description}</p>
                            <p> <span className='font-bold '> Quantity:</span> {inventory.quantity}</p>
                            <p > <span className='font-bold'>Supplier Name: </span> {inventory.supplier}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ItemDetails;