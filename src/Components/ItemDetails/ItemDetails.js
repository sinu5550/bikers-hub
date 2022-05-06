import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../Hooks/useItemDetails';
// import brandLogo from '../../Images/bikers-hub.png';
import Button from '../Button/Button';

const ItemDetails = () => {
    const { itemsId } = useParams();
    const [inventory, setInventory] = useItemDetails(itemsId);
    const [items, setItems] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${itemsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [itemsId]);

    // =================== Handle Delivered Button =======================
    const handleDelivered = (quantity) => {
        const proceed = window.confirm('Are you want to delivered this product?');

        if (proceed) {
            const newQuantity = Number(quantity) - 1;
            const newItems = { ...items, quantity: newQuantity }
            setItems(newItems)
            // console.log(newQuantity);
            const url = `http://localhost:5000/inventory/${itemsId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ newItems })
            })
                .then(res => res.json())
                .then(data => {
                    setInventory(newItems)

                })
        }

    }
    const handleIncrease = (event) => {

        event.preventDefault();

        const inputQuantity = event.target.quantity.value;

        const newQuantity = Number(inputQuantity) + Number(inventory.quantity);
        const newItems = { ...items, quantity: newQuantity }
        setItems(newItems)
        // console.log(newQuantity);
        const url = `http://localhost:5000/inventory/${itemsId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newItems })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setInventory(newItems)
                event.target.reset()
            })
    }
    return (
        <div>
            <div className='py-16'>
                <div className='shadow-lg w-11/12 mx-auto p-4  bg-white self-auto  '>
                    <div className='grid grid-cols-2 '>
                        <div className='w-full col-span-2 md:col-span-1 flex items-center'>
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
                                        <form onSubmit={handleIncrease}>
                                            <input className='h-[40px] w-[150px] outline-none  border-b-2 ' type="number" id="quantity" name="quantity" placeholder='Increase Quantity' />
                                            <button className='bg-sky-600 text-white px-2 py-[8px] rounded' type='submit' >Increase</button>
                                        </form>
                                    </div>

                                    <div onClick={() => handleDelivered(inventory?.quantity)} className='flex justify-center mt-10 lg:mt-0'>
                                        <Button >DELIVERED</Button>
                                    </div>

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