import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className='loaderContainer'>
        <div className="cssload-container">
      <ul className="cssload-flex-container">
        <li>
          <span className="cssload-loading cssload-one"></span>
          <span className="cssload-loading cssload-two"></span>
          <span className="cssload-loading-center"></span>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Loader;
