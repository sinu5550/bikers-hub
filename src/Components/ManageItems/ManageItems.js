import React from 'react';
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
            <h1>Manage your Inventory Items</h1>
            {
                inventory.map(inventory => <div key={inventory._id}>
                    <p>{inventory.productName} {inventory.description} <button onClick={() => handleDelete(inventory._id)}>delete</button> </p>
                </div>)
            }
        </div>
    );
};

export default ManageItems;