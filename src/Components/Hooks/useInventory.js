import { useEffect, useState } from 'react';

const useInventory = () => {
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch('https://fast-plains-59234.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventory(data))
        setLoading(true);
    }, [])
    return [inventory, setInventory, loading];

};

export default useInventory;