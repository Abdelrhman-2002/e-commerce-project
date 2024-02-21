import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import './Product.css'
const Product = () => {
    const ID=useParams()
    const {id}=ID
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      console.log(data)
  return (
    <Fragment>
      <div className='singleUserContainer'>
          <div key={data.id} className='singleUser'>
            <img alt='' src={data.image}/>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p>{data.price}</p>
            {/* <p>{data.rating.rate}</p> */}
          </div>
      </div>
    </Fragment>
  )
}

export default Product