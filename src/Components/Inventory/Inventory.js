import React from 'react';
import useInventory from '../Hooks/useInventory';
import ItemsCart from '../InventoryItems/ItemsCart/ItemsCart';

const Inventory = () => {
    const [inventory] = useInventory();
    return (
        <div>
            <h1 className='text-center flex-none font-bold text-3xl font-[poppins] uppercase mt-4  '>  inventory <span className='text-red-700'>items</span></h1>
            <h1 className='text-center flex-none font-bold text-lg font-[poppins]  '>Total items : {inventory.length}</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-8 mb-4 container mx-auto'>
                {
                    inventory.map(inventory => <ItemsCart key={inventory._id} inventory={inventory} ></ItemsCart>)
                }
            </div>
        </div >
    );
};

export default Inventory;