import React, { Suspense, useState } from 'react';
import Dresst from '../Dresst/Dresst';

const Dress = ({data}) => {
    const [allDress, setAllDress] = useState([]);

    // useEffect(() => {
    //     fetch("data.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllDress(data)
    //         })
    // }, [])
    // const dressPromish = fetch('/data.json').then(res => res.json())
    
    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Dress Collection</h1>
            <Suspense fallback={<span>loading.....</span>}>
                {
                    data.map((singleDress) => (
                        <Dresst
                            key={singleDress.dressId}
                            singleDress={singleDress}
                        />
                    ))
                }

            </Suspense>
        </div>
    );
};

export default Dress;