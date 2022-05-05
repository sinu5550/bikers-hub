import { useEffect, useState } from 'react';

const useItemDetails = (itemsId) => {
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${itemsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [itemsId])
    return [inventory];
};

export default useItemDetails;