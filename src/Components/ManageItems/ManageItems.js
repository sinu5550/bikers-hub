import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Button from '../Button/Button';
import useInventory from '../Hooks/useInventory';
import Loading from '../Loading/Loading';


const ManageItems = () => {
    const [inventory, setInventory, loading] = useInventory();

    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    console.log(user);
    const handleDelete = id => {

        const proceed = window.confirm('Are yo sure? You want to delete this item?');
        if (proceed) {
            const url = `https://fast-plains-59234.herokuapp.com/inventory/${id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventory.filter(inventory => inventory._id !== id);
                    setInventory(remaining);
                })

        }
    }
    const handleEdit = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div>
            <h1 className='text-center font-bold text-xl mt-5'>Manage inventory items <br /> Total: {inventory.length}</h1>
            <div className=" w-11/12 mx-auto p-2 overflow-x-auto">
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
                        inventory.map(inventory => loading ?
                            <tbody key={inventory._id}>
                                <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
                                    <td></td>
                                    <td className="p-2 border-r"><img src={inventory?.img} alt="Bike" width="80px" className='mx-auto' /></td>
                                    <td className="p-2 border-r">{inventory?.productName}</td>
                                    <td className="p-2 border-r">{inventory?.email}</td>
                                    <td className="p-2 border-r">BDT {inventory?.price}</td>
                                    <td className="p-2 border-r">{inventory?.quantity}</td>
                                    <td>
                                        <button onClick={() => handleEdit(inventory._id)} className="bg-blue-500  p-2 text-white hover:shadow-lg text-xs font-thin mr-2">Restock</button>
                                        <Link to='/manage' onClick={() => handleDelete(inventory._id)} className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin ml-2">Remove</Link>
                                    </td>
                                </tr>
                            </tbody> : <Loading></Loading>)
                    }
                </table>
            </div>

            <div className='flex justify-center mt-10'>
                <Link to='/addItems' className='text-center'> <Button> Add New Item</Button></Link>
            </div>


        </div>

    )
};

export default ManageItems;