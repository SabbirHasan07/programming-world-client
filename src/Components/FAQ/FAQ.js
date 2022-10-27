import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Contex/AuthProvider';

const FAQ = () => {
    const [name,setName] = useState([]);
     const person= {
        name : "Sabbir Hasan",
        designation:"Admin/author",
        email:"sabbirhasanleom10@gmail.com",
        section: "Questions And Answers",
        img: 'https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/305412657_378280334507427_7642492157557809932_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFXxpyn3rxLKS4JFp7WnGaL-CU26-bCz9b4JTbr5sLP1mljwSkShsxGLjPjS5L8NbgRkduZUdMOrFbZOxCqIvgR&_nc_ohc=7FdiV8a7hZIAX84mYPc&_nc_ht=scontent.fdac80-1.fna&oh=00_AfA3LT-g7fZQl3go7e5hJPnt-SuZUHH8yFWffxtR9igkjA&oe=635EE6BB'
     }
    const { user } = useContext(AuthContext);
    const handleAdmin =()=>{
        
        const Admin = person;

        setName(Admin);
        
        

    }
    return (

        <div className='flex'>
            
            <div className="card  bg-base-100 shadow-xl ml-28 mb-6 w-4/12">
            <h1 className='text-center text-3xl text-blue-900 font-bold'>Your Profile</h1>
                <figure className="px-10 pt-10">
                    <img src={user?.photoURL} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user?.displayName}</h2>

                    <div className="card-actions">
                        <button onClick={handleAdmin} className="btn btn-primary">Questions ?</button>

                    </div>
                </div>
            </div>

            <div className="card  bg-base-100 shadow-xl ml-28 mb-6 w-4/12">
            
                <figure className='px-10 pt-10  '><img src={name.img} alt="Shoes" className="rounded-xl" /></figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl ">{name.designation}</h2>
                    <p className='text-2xl'>{name.name}</p>
                    <p className='text-xl font-bold'>E-mail: {name.email}</p>
                    <p className=' font-bold'>Section:  {name.section}</p>
                   
                </div>
            </div>





        </div>

    );
};

export default FAQ;