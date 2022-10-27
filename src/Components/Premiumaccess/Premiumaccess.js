import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Premiumaccess = () => {
    const primium = useLoaderData();
    const { id, name,image,detail,description } = primium;
    console.log(primium);
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-5 text-gray-500'>Premium Access</h1>
            <div>
            <p className='m-4 text-1xl font-bold'> ID: <span className='text-3xl font-bold'> {id}</span></p>
                <div className="card card-side bg-base-100 shadow-xl m-6">
                
                    <figure><img src={image} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{detail}</p>
                        <div className="card-actions justify-end">
                            
                        </div>
                    </div>
                    
                </div>
                <div className="card card-side bg-base-100 shadow-xl m-6">
                    <p>{description}</p>

                </div>
            </div>

        </div>
    );
};

export default Premiumaccess;