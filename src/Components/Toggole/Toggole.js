import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './toggole.css';
import { FaSun} from "react-icons/fa";

const Toggole = () => {
    const [theme,setTheme] = useState('light');
    const toggolTheme =()=>{


        if(theme === 'light'){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    };
    useEffect(()=>{

        document.body.className = theme;
    },[theme]);
    return (
        <div onClick={toggolTheme} className={`Toggole ${theme}`}>
            <p className='text-3xl font-bold mt-6 ml-24'>"Click anywhere"</p>
            <button className=' text-8xl p-48 ' ><FaSun/> Toggole <span className='text-xl'>(click me)</span></button>
            
        </div>
    );
};

export default Toggole;