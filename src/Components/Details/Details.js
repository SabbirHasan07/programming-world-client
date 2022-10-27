import React from 'react';
import { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { BsPrinter } from "react-icons/bs";





const Details = () => {
    
    });
    const { id, name, detail, rating, image } = detailsAll;
    return (
        <div>
            <div onClick={handleClick} className='flex bg-orange-200 ml-96 mt-4 mr-96 mb-4 p-2 text-2xl font-bold rounded-2xl '>
                <button className='mr-6' ><BsPrinter className='text-3xl' /></button>
                <p>Print to PDF</p>
            </div>

            <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }} className="hero min-h-screen bg-base-200 shadow-2xl">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <p className='text-2xl'>Rating: <span className='text-3xl font-bold'>{rating}</span></p>
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>

                        <h1 className="text-5xl font-bold">{name}</h1>

                        <p className="py-6">{detail}</p>
                        <Link to={`/premium/${id}`} className="btn btn-primary">Get Premium access </Link>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Details;