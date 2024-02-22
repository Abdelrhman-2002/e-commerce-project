import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import './ScrollToTop.css';
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className='scroll-to-top-button'
      onClick={scrollToTop}
      style={{display:isVisible?'flex':'none'}}
    >
      <IoIosArrowUp />
    </div>
  );
};

export default ScrollToTop;
