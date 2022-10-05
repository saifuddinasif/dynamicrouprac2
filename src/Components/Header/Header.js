import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
               <Link to='/home'> Home</Link>
               <Link to='/about'>   About</Link>
               <Link to='/product'>   product</Link>
               <Link to='/friend'>   Friend </Link>

         
         <p>Common Things </p>
        </div>
    );
};

export default Header;