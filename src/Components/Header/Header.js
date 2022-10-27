import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Untitled-removebg-preview.png'
import { AuthContext } from '../Contex/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import {FiSun,FiMoon } from 'react-icons/fi';


const Header = () => {
   
    const {user, logOut,themeDark, setThemeDark} = useContext(AuthContext);
    const handleLogout = ()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <div className="flex-1">
                    <Link to='/'><img className='w-48' src={logo} alt="" /></Link>
                    
                </div>
                <div>
                <Link to='/' className="btn btn-ghost normal-case text-xl mx-96">Programming World</Link>
                </div>
                <div className="flex-none">
                    
                    <Link to='/courses'>Courses</Link>
                    <Link to='/faq' className='mx-3'> FAQ</Link>
                    <Link to='/blog' className='mx-3'> Blog</Link>
                    {
                        themeDark ? <button onClick={()=>setThemeDark(!themeDark)}><FiSun/></button> : <button onClick={()=>setThemeDark(!themeDark)}><FiMoon/></button>
                    }
                    <div>
                    <>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.photoURL?
                                        <img data-bs-toggl='tooltip' title={user.displayName} className='w-12 rounded m-0' src={user?.photoURL} alt="" srcset="" />:
                                        <FaUserAlt/>
                                    
                                    }</span>
                                        <button className='mb-8' variant="light" onClick={handleLogout}>Log out</button>
                                    </>
                                    :
                                    <>
                                        <Link className='mx-3'  to='/login'>Login</Link>
                                    </>
                            }


                        </>

                    </div>
                  
                    

                </div>
            </div>


        </div>
    );
};

export default Header;