import { useEffect, useState } from 'react';

const useItemDetails = (itemsId) => {
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `https://fast-plains-59234.herokuapp.com/inventory/${itemsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [itemsId])
    return [inventory, setInventory];
};

export default useItemDetails;