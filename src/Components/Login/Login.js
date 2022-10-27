import React, { useContext } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contex/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';


const Login = () => {
    const [error, setError] = useState('');

    const { signIn, loginProvider, setLoading,githubProvider } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();
    const githubProviderhere = new GithubAuthProvider();
    const handleGooglesignin = () => {
        loginProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(e => console.error(e));
    }
    const handleGithubsinIn=()=>{
        githubProvider(githubProviderhere)
        .then(result => {
            const user = result.user;
            console.log(user);

        })
        .catch(e => console.error(e));

    }
    const handleSignin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.uid) {
                    navigate(from, { replace: true });

                }
                else {
                   
                   

                }
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            })
        


    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Log In</h1>
                        <p className="py-6"> Please Login and stay with us </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleSignin} className="card-body">
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
                                    <p> First time visit?  <Link to='/signup' className="label-text-alt link link-hover text-xl text-blue-800 font-bold">Sign Up</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='flex'>
                                <button onClick={handleGooglesignin}><FcGoogle className='text-center ml-24 text-3xl my-3 ' /></button>
                                <button onClick={handleGithubsinIn}><BsGithub className='text-center ml-6 text-3xl my-3 ' /></button> 

                            </div>
                        </Form>
                        <div>
                            {error}
                        </div>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;