import { useEffect, useState } from 'react';

const useInventory = () => {
    const [inventory, setInventory] = useState([]);
    useEffect(() => {
        fetch('https://fast-plains-59234.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    return [inventory, setInventory];

};

export default useInventory;