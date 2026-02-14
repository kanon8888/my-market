import React, { useEffect, useState } from 'react';

const Dress = () => {
    const [allDress, setAllDress] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                setAllDress(data)
            })
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Dress Collection</h1>
        </div>
    );
};

export default Dress;