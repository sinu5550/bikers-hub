import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import './AddInventoryItems.css';
import brandLogo from '../../Images/bikers-hub.png';


const AddInventoryItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div className='mt-28'>
            <div className='bg-white mx-auto w-10/12 py-10 pt-6 px-0 shadow-lg'>
                <img src={brandLogo} width='200px' className='block mx-auto' alt="BIKERS_HUB" />
                <h1 className='text-center text-3xl font-bold mb-8 title'>Add Items</h1>
                <div className=''>
                    <form className='flex flex-col form-control' onSubmit={handleSubmit(onSubmit)} >
                        <div className='grid grid-cols-2'>
                            <div className='md:col-span-1 col-span-2'>
                                <input className='mb-3 ' placeholder='Product Name' {...register("productName", { required: true, maxLength: 20 })} />
                                <input className='mb-3 ' placeholder='Price in Taka' type="number" {...register("price")} />
                                <input className='mb-3 ' placeholder='Supplier Name' type="text" {...register("supplier")} />
                            </div>
                            <div className='md:col-span-1 col-span-2'>
                                <input className='mb-3 ' placeholder='Quantity' type="number" {...register("quantity")} />

                                <textarea className='mb-3' placeholder='Description' {...register("description")} />
                                <input className='mb-3 ' placeholder='Photo URL' type="text" {...register("img")} />
                            </div>
                        </div>
                        <div className='flex justify-center  mt-10'>
                            <Button type='submit'>
                                Add Items
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddInventoryItems;