import React from 'react';

import { Link } from 'react-router-dom';
const Course = ({course}) => {

    return (

        <div className='lg:grid grid-cols-3'>
            {
                course.map(crr =>

                    <p className='gridgrid-cols-3 mx-6 '>
                        <Link to={`/details/${crr.id}`} className="card w-80 h-120 shadow-2xl  bg-slate-200 my-6 hover:bg-emerald-200 ">
                            <div className="card-body">
                                <h2 className="card-title">{crr.name}</h2>
                                <p>{crr.description}</p>
                            </div>
                            <figure><img className='w-auto h-20' src={crr.image} alt="course" /></figure>
                            <p className='my-2 px-5'>Rating: {crr.rating}</p>
                        </Link>


                    </p>

                )
            }
        </div >

    );
};

export default Course;