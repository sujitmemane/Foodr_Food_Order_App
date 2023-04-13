import React ,{useContext,useState,useEffect} from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import CartContext from '../../store/cart-context'

import './cart-button.css'
const CartButton = (props) => {
  const [btnIsHighlighted,setBtnIsHiglighted]=useState(false)
    const cartCtx=useContext(CartContext)
    const {items}=cartCtx
   const numberOfCartItems = cartCtx.items.length;
const btnClasses=`${'btn-cart'} ${ btnIsHighlighted? 'bump':''}`
  useEffect(()=>{
    if(cartCtx.items.length===0){
      return
    }
    setBtnIsHiglighted(true)
    const timer=setTimeout(()=>{setBtnIsHiglighted(false)},300)

    return ()=>{
       clearTimeout(timer)
    }

  },[items])
  return (
    <div className={btnClasses} onClick={props.onShow}>
      <div className='icon'><FaShoppingCart size={27}/></div>
     
      <div className='badge'><p>{numberOfCartItems}</p></div>
    </div>
  )
}

export default CartButton
