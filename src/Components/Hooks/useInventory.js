import { useEffect, useState } from 'react';

const useInventory = () => {
    const [inventory, setInventory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    return [inventory, setInventory];

};

export default useInventory;