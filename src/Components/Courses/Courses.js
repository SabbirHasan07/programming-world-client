import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Course from '../Course/Course';

const Courses = () => {
    const [course,setCourse] = useState([])
    useEffect(()=>{
        fetch('https://programming-hub-server.vercel.app/courses')
        .then(res=>res.json())
        .then(data => setCourse(data));


    },[])
  
 
    return (
        <div className='lg:flex m-6' >
            <div className='w-2/12' >
                <div className='grid mt-4'>
                {
                    course.map(cr=> <Link to={`/details/${cr.id}`} className='bg-emerald-600 mx-2 my-2 text-white px-6 py-2 rounded shadow-2xl hover:bg-violet-600'>
                    {cr.name}</Link>)
                }
                </div>
            </div>
            <div className='w-10/12'>
                <Course
                course={course}></Course>

            </div>
         
        </div>
    );
};

export default Courses;