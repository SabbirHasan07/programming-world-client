import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Untitled-removebg-preview.png'
import { AuthContext } from '../Contex/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';


const Header = () => {

    const { user, logOut, themeDark, setThemeDark } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <div className='lg:flex'>
                    <div >
                        <Link to='/'><img className='lg:w-56 sm:w-36' src={logo} alt="" /></Link>

                    </div>
                    <div>
                        <Link to='/' className="btn btn-ghost normal-case sm:text-xs lg:text-2xl sm:mx-1 lg:mx-56">Programming World</Link>
                    </div>
                </div>
                <div className="flex-none">

                    <Link to='/courses' className='lg:mx-2 sm:mx-2'>Courses</Link>
                    <Link to='/faq' className='lg:mx-3 sm:mx-2'> FAQ</Link>
                    <Link to='/blog' className='mx-3 sm:mx-1'> Blog</Link>
                    {
                        themeDark ? <button className='lg:m-2  sm:m-1' onClick={() => setThemeDark(!themeDark)}><FiSun /></button> : <button className='m-2' onClick={() => setThemeDark(!themeDark)}><FiMoon /></button>
                    }
                    <div>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.photoURL ?
                                            <img data-bs-toggl='tooltip' title={user.displayName} className='rounded m-0 w-9' src={user?.photoURL} alt="" srcset="" /> :
                                            <FaUserAlt />

                                        }</span>
                                        <button className='mb-8' variant="light" onClick={handleLogout}>Log out</button>
                                    </>
                                    :
                                    <>
                                        <Link className='mx-3' to='/login'>Login</Link>
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