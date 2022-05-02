import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../Hooks/useItemDetails';

const ItemDetails = () => {
    const { itemsId } = useParams();
    const [inventory] = useItemDetails(itemsId);
    return (
        <div>
            <h1 className='mt-28 font-bold text-2xl text-center'>You are about to book: {inventory.productName}</h1>

        </div>
    );
};

export default ItemDetails;