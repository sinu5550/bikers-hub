import React from 'react';
import Banner from '../Header/Banner/Banner';
import useInventory from '../Hooks/useInventory';
import ItemsCart from '../InventoryItems/ItemsCart/ItemsCart';


const Home = () => {
    const [inventory] = useInventory();
    return (
        <div>

            <Banner></Banner>
            <h1 className='text-center flex-none font-bold text-3xl font-[poppins] uppercase mt-10  '>  inventory <span className='text-red-700'>items</span></h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-8 mb-4 container mx-auto'>
                {
                    inventory.slice(0, 6).map(inventory => <ItemsCart key={inventory._id} inventory={inventory} ></ItemsCart>)
                }
            </div>
        </div>
    );
};

export default Home; 