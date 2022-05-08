import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Button from '../Button/Button';

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    console.log(myItems);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    // console.log(user);
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://fast-plains-59234.herokuapp.com/myItems?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setMyItems(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 403 || error.response.status === 401) {
                    toast.error('Error Login Token Failed')
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getItems();
    }, [user])
    const handleDelete = id => {

        const proceed = window.confirm('Are yo sure? You want to delete this item?');
        if (proceed) {
            const url = `https://fast-plains-59234.herokuapp.com/myItems/${id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = myItems.filter(myItem => myItem._id !== id);
                    setMyItems(remaining);
                })
        }
    }
    const handleEdit = id => {
        navigate(`/myItems/${id}`)
    }
    return (
        <div>
            <h1 className='text-center font-bold text-xl mt-5'>Manage My items<br /> Total: {myItems.length}</h1>
            <div className=" w-11/12 mx-auto overflow-x-auto">
                <table className=" table table-compact w-full">
                    <thead>
                        <tr className="bg-gray-50 border-b">
                            <th></th>
                            <th className="p-2 border-r cursor-pointer text-sm font-bold text-gray-500">
                                <div className="flex items-center justify-center">
                                    Product Image

                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-bold text-gray-500">
                                <div className="flex items-center justify-center">
                                    Product Name

                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-bold text-gray-500">
                                <div className="flex items-center justify-center">
                                    Email

                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-bold text-gray-500">
                                <div className="flex items-center justify-center">
                                    Supplier Name

                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-bold text-gray-500">
                                <div className="flex items-center justify-center">
                                    Price

                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-bold text-gray-500">
                                <div className="flex items-center justify-center">
                                    Quantity

                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-bold text-gray-500">
                                <div className="flex items-center justify-center">
                                    Action

                                </div>
                            </th>
                        </tr>
                    </thead>
                    {
                        myItems.map(myItem => <tbody key={myItem._id}>
                            <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
                                <td></td>
                                <td className="p-2 border-r"><img src={myItem?.img} alt="Bike" width="80px" className='mx-auto' /></td>
                                <td className="p-2 border-r">{myItem?.productName}</td>
                                <td className="p-2 border-r">{myItem?.email}</td>
                                <td className="p-2 border-r">{myItem?.supplier}</td>
                                <td className="p-2 border-r">BDT {myItem?.price}</td>
                                <td className="p-2 border-r">{myItem?.quantity}</td>
                                <td>
                                    <button onClick={() => handleEdit(myItem._id)} className="bg-blue-500  p-2 text-white hover:shadow-lg text-xs font-thin mr-2">Restock</button>
                                    <Link to='/manage' onClick={() => handleDelete(myItem._id)} className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin ml-2">Remove</Link>
                                </td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>

            <div className='flex justify-center mt-10'>
                <Link to='/addItems' className='text-center'> <Button> Add New Item</Button></Link>
            </div>


        </div>
    );
};

export default MyItems;