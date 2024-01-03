import React, { useContext, useEffect, useState } from 'react';
import logo from '../assets/Images/logo.png';
import {HiMagnifyingGlass , HiMoon , HiSun } from 'react-icons/hi2';
import { ThemeContext } from '../Context/ThemeContext';


const Header = () => {
    const [toggle,setToggle] = useState(true);
    const {theme,setTheme} = useContext(ThemeContext)

    useEffect(() =>{
        console.log("theme" ,theme)
    },[])
  return (
    <div className='flex items-center p-3'>
        <img src={logo} className='w-[60px] h-[60px]'/>
        <div className='flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full'>
            <HiMagnifyingGlass/>
            <input type="text" placeholder='Search games' className='bg-transparent outline-none px-2'/>
        </div>
        <div>
            {theme== 'light' ? <HiMoon className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'onClick={() =>{setTheme('dark') ; localStorage.setItem('theme' , 'dark')}}/> : <HiSun className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer' onClick={() =>{setTheme('light') ; localStorage.setItem('theme' , 'light')}}/>}
            
        </div>
    </div>
  )
}

export default Header