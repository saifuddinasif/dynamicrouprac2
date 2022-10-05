import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
               <NavLink className={({isActive})=> isActive ? "active" : undefined} to='/home'> Home</NavLink>
               <NavLink to='/about'>   About</NavLink>
               <NavLink to='/product'>   product</NavLink>
               <NavLink to='/friend'>   Friend </NavLink>
               <NavLink to='/header'>   header </NavLink>
               <NavLink to='/posts'>  post</NavLink>

         
         <p>Common Things </p>
        </div>
    );
};

export default Header;