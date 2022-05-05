import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import './AddInventoryItems.css';
import brandLogo from '../../Images/bikers-hub.png';
import { toast } from 'react-toastify';



const AddInventoryItems = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        console.log(data);
        if (!data) {
            return toast.error('Input field cannot be empty');
        }

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
                if (!result.success) {
                    return toast.error(result.error);
                }
                toast.success(result.message);
                // console.log(result);
                // console.log(data);

            })


        reset();

    };
    return (
        <div className='my-16'>
            <div className='bg-white mx-auto w-10/12 py-10 pt-6 px-0 shadow-lg'>
                <img src={brandLogo} width='200px' className='block mx-auto' alt="BIKERS_HUB" />
                <h1 className='text-center text-3xl font-bold mb-8 title'>Add Items</h1>
                <div className=''>
                    <form className='flex flex-col form-control' onSubmit={handleSubmit(onSubmit)} >
                        <div className='grid grid-cols-2'>
                            <div className='md:col-span-1 col-span-2'>
                                <input className='mb-3 ' placeholder='Product Name' {...register("productName", { required: true })} />
                                {errors.productName && (<small className='text-red-700 pl-14'>Product Name is Required</small>)}

                                <input className='mb-3 ' placeholder='Price in Taka' type="number" {...register("price", { required: true })} />
                                {errors.price && (<small className='text-red-700 pl-14'>Price is Required</small>)}

                                <input className='mb-3 ' placeholder='Supplier Name' type="text" {...register("supplier", { required: true })} />
                                {errors.supplier && (<small className='text-red-700 pl-14'>Supplier Name is Required</small>)}

                            </div>
                            <div className='md:col-span-1 col-span-2'>
                                <input className='mb-3 ' placeholder='Quantity' type="number" {...register("quantity", { required: true })} />
                                {errors.quantity && (<small className='text-red-700 pl-14'>Quantity is Required</small>)}


                                <textarea className='mb-3' placeholder='Description' {...register("description", { required: true })} />
                                {errors.description && (<small className='text-red-700 pl-14'>Description is Required</small>)}

                                <input className='mb-3 ' placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                                {errors.img && (<small className='text-red-700 pl-14'>Photo URL is Required</small>)}

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