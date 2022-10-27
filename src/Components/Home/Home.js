import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";


const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                    <div>
                        <h1 className="text-5xl font-bold">Welcome</h1>
                        <p className="py-6">This is the best place to learn and prove yourself. Happy journey!..
                        "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - Patrick McKenzie</p>
                        <button className="btn btn-primary m-6"><Link to='/courses'> Courses <BsFillArrowRightCircleFill className='mt-2'/> </Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;