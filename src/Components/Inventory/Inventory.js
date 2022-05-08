import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../Hooks/useInventory';
import ItemsCart from '../InventoryItems/ItemsCart/ItemsCart';
import Loading from '../Loading/Loading';

const Inventory = () => {
    const [inventory, loading] = useInventory();
    return (
        <div>
            <div className='pb-10'>
                <h1 className='text-center flex-none font-bold text-3xl font-[poppins] uppercase mt-4  '>  inventory <span className='text-red-700'>items</span></h1>
                <h1 className='text-center flex-none font-bold text-lg font-[poppins]  '>Total items : {inventory.length}</h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-8  container mx-auto'>
                    {
                        inventory.map(inventory => loading ? <ItemsCart key={inventory._id} inventory={inventory} ></ItemsCart> : <Loading></Loading>)
                    }
                </div>
            </div >
            <p className='text-center text-xl pr-[5%]'> <Link to='/manage' className='float-right   border bg-sky-600 text-white hover:bg-sky-700 transition-all duration-500 py-2 px-3'>Manage Inventory &gt;&gt; </Link> </p>
        </div>
    );
};

export default Inventory;