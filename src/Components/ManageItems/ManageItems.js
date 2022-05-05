import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useInventory from '../Hooks/useInventory';
// import ManageInventory from '../ManageInventory/ManageInventory';

const ManageItems = () => {
    const [inventory, setInventory] = useInventory();
    const [user] = useAuthState(auth);
    console.log(user);
    const handleDelete = id => {

        const proceed = window.confirm('Are yo sure? You want to delete this item?');
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
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
    return (
        <div>
            <h1 className='text-center font-bold text-xl mt-5'>Manage inventory items: {inventory.length}</h1>
            <div className="table w-11/12 mx-auto p-2">
                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-50 border-b">


                            <th className="p-2 border-r cursor-pointer text-sm font-bold text-gray-500">
                                <div className="flex items-center justify-center">
                                    Name

                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-bold text-gray-500">
                                <div className="flex items-center justify-center">
                                    Email

                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-bold text-gray-500">
                                <div className="flex items-center justify-center">
                                    Address

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
                        inventory.map(inventory => <tbody key={inventory._id}>
                            <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">

                                <td className="p-2 border-r">{inventory.productName}</td>
                                <td className="p-2 border-r">{user?.email}</td>
                                <td className="p-2 border-r">{inventory.price}</td>
                                <td>
                                    <Link to='/' className="bg-blue-500 px-4 py-2 text-white hover:shadow-lg text-xs font-thin mr-2">Edit</Link>
                                    <Link to='/manage' onClick={() => handleDelete(inventory._id)} className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin ml-2">Remove</Link>
                                </td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>




        </div>

    )
};

export default ManageItems;