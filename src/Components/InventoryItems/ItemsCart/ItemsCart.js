import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Button/Button';
import './ItemsCart.css';
const ItemsCart = ({ inventory }) => {
    console.log(inventory);
    const { _id, description, img, price, productName, quantity, supplier } = inventory;
    const navigate = useNavigate();
    const navigateToItemsDetail = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className='col-span-3 md:col-span-1 lg:col-span-1 flex items-stretch overflow-x-hidden '>
            <div data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="300"
                className=' shadow-lg w-full  p-4 text-center bg-white self-auto items-container '>
                <img src={img} alt="" className=' mx-auto w-11/12 hover:scale-110 transition-all duration-500 ' />
                <div className='md:px-8 px-0 py-4'>
                    <p className='text-2xl font-[poppins] font-bold uppercase'>{productName}</p>
                    <p>{description.slice(0, 100)}...</p>
                    <div className='flex justify-between w-75 my-5'>
                        <p> <span className='font-bold '>Price:</span>  BDT {price}</p>
                        <p> <span className='font-bold '> Quantity:</span> {quantity}</p>
                    </div>

                    <p className=''> <span className='font-bold'>Supplier Name: </span> {supplier}</p>
                </div>
                <div onClick={() => navigateToItemsDetail(_id)}
                    className='manage-btn'>
                    <Button >Update Stock</Button>
                </div>
            </div>
        </div>
    );
};

export default ItemsCart;