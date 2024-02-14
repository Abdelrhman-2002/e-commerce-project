import React, { Fragment, useState, useEffect } from 'react';
import y from './NavBar.module.css';
import storeLogo from '../../Images/store.png';
import { IoMdSearch } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
// import './lol.css'
const OptionsNav = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <nav className='mainNav' class={y.mainNav} style={{position:isFixed?'fixed':'static'}}>
        <div class={y.logo}>
          <img src={storeLogo} alt='' />
          <p>Shoppa</p>
        </div>
        <ul>
          <li><NavLink to={'/home'}>Home</NavLink></li>
          <li><NavLink to={'/about'}>About Us</NavLink></li>
          <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
        </ul>
        <ol>
          <li><IoMdSearch size={24} /></li>
          <li className={y.cart}><TiShoppingCart size={24} /><div className={y.itemNum}><p>10</p></div></li>
        </ol>
      </nav>
    </Fragment>
  );
};

export default OptionsNav;
