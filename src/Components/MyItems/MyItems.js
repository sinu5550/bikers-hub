import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    console.log(myItems);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    // console.log(user);
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myItems?email=${email}`;
            const { data } = await axios.get(url);
            setMyItems(data);
        }
        getItems();
    }, [user])
    const handleDelete = id => {

        const proceed = window.confirm('Are yo sure? You want to delete this item?');
        if (proceed) {
            const url = `http://localhost:5000/myItems/${id}`;
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
            <h1 className='text-center font-bold text-xl mt-5'>Manage My items: {myItems.length}</h1>
            <div className=" w-11/12 mx-auto p-2 overflow-x-auto">
                <table className=" table table-compact w-full">
                    <thead>
                        <tr className="bg-gray-50 border-b">


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

                                <td className="p-2 border-r">{myItem.productName}</td>
                                <td className="p-2 border-r">{myItem?.email}</td>
                                <td className="p-2 border-r">BDT {myItem.price}</td>
                                <td className="p-2 border-r">{myItem.quantity}</td>
                                <td>
                                    <button onClick={() => handleEdit(myItem._id)} className="bg-blue-500 px-4 py-2 text-white hover:shadow-lg text-xs font-thin mr-2">Edit</button>
                                    <Link to='/manage' onClick={() => handleDelete(myItem._id)} className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin ml-2">Remove</Link>
                                </td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>




        </div>
    );
};

export default MyItems;