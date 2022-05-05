// import React from 'react';
// import { Link } from 'react-router-dom';
// import useInventory from '../Hooks/useInventory';

// const ManageInventory = ({ inventory }) => {
//     const [setInventory] = useInventory();
//     const { productName, quantity, supplier } = inventory;
//     console.log(productName);
//     const handleDelete = id => {
//         const proceed = window.confirm('Are yo sure? You want to delete this item?');
//         if (proceed) {
//             const url = `http://localhost:5000/inventory/${id}`;
//             fetch(url, {
//                 method: 'DELETE'
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data);
//                     const remaining = inventory.filter(inventory => inventory._id !== id);
//                     setInventory(remaining);
//                 })
//         }
//     }
//     return (






       




//     );
// };

// export default ManageInventory;