import React from 'react'
import './cart-item.css'
import {HiPlus,HiMinus} from 'react-icons/hi'
import {ImCross} from 'react-icons/im'
const CartItem = (props) => {
    console.log(props.name)
  return (
   <li className='cart-item'>
        <h2>{props.name}</h2>
        <div className='cart-box'>

            <div className='summary'>
              <span className='price'>Rs {props.price}</span>
              <span className='amount'> <ImCross size={20}></ImCross> {props.amount}</span>
            </div>
        
            <div className='actions'>
              <button onClick={props.onRemove}><HiMinus size={23}></HiMinus></button>
              <button onClick={props.onAdd}><HiPlus size={23}></HiPlus></button>
            </div>
        </div>
    </li>
  )
}

export default CartItem
