import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../Contex/AuthProvider';


const Signup = () => {
    const [error,setError] = useState('');

    const { createUser ,updateProfileuser } = useContext(AuthContext);

    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            handleupdateUserprofile(name, photoURL);
            
})
        .catch(e => {
            console.error(e);
            setError(e.message);
        });

            
        


    }
    const handleupdateUserprofile = (name,photoURL) =>{
        const profile ={
            displayName: name,
            photoURL: photoURL
        }
        updateProfileuser(profile)
        .then(()=>{})
        .catch(error => console.error(error));
    }
   
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                    <p className="py-6"> Sign Up and keep rocking </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={handleSubmit}className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Link" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                              <p> Already have an account?  <Link to='/login' className="label-text-alt link link-hover text-xl text-blue-800 font-bold">Log In</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <div>
                            <p className='text-rose-900'>{error}</p>
                          
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Signup;