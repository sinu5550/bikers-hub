import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../Hooks/useInventory';

const ManageItems = () => {
    const [inventory, setInventory] = useInventory();
    const handleDelete = id => {
        const proceed = window.confirm('Are yo sure? You want to delete this item?');
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
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
            <div className="table w-11/12 mx-auto p-2">

                <h1 className='text-center'>Manage your Inventory Items</h1>
                {/* {
                    inventory.map(inventory => <div className='bg-white' key={inventory._id}>
                        <p>{inventory.productName} {inventory.description} <button onClick={() => handleDelete(inventory._id)} className='bg-red-900'>delete</button> </p>
                    </div>)
                } */}
                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-50 border-b">

                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    ID

                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Name

                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Email

                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Address

                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Action

                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
                            <td className="p-2 border-r">1</td>
                            <td className="p-2 border-r">Yamaha R15 V3 Indian Version</td>
                            <td className="p-2 border-r">john@gmail.com</td>
                            <td className="p-2 border-r">Sydney, Australia</td>
                            <td>
                                <Link to='/' className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin mr-2">Edit</Link>
                                <Link to='/' className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin ml-2">Remove</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ManageItems;