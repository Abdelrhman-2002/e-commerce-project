import React from 'react'
import './Cart.css'
import { useSelector } from 'react-redux'
const Cart = () => {
    console.log(useSelector(state=>state))
  return (
   <>
     <div>Cart</div>
   </>
  )
}

export default Cart