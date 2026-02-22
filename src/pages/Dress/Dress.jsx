import React, { Suspense, useState } from 'react';
import Dresst from '../Dresst/Dresst';

const Dress = ({ data }) => {
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
            <h1 className="text-3xl text-center p-6 font-extrabold 
bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-600 
bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,0,150,0.6)]
animate-pulse">
                Dress Collection
            </h1>
            <Suspense fallback={<span>loading.....</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        data.map((singleDress) => (
                            <Dresst
                                key={singleDress.dressId}
                                singleDress={singleDress}
                            />
                        ))
                    }
                </div>

            </Suspense>
        </div>
    );
};

export default Dress;