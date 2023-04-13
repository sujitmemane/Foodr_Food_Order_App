import React, { useContext } from 'react'
import './food-item.css'
import FoodItemForm from './FoodItemForm'
import CartContext from '../../store/cart-context'
const FoodItem = (props) => {
  const cartCtx=useContext(CartContext)
  const addToCartHandler=amount=>{
    cartCtx.addItem(
      {
        id:props.id,
    name:props.name,
    amount:amount,
    price:props.price

      }
    )
  }
  return (
    <div className='food-item'>
      <img src={props.img} />
      <h2>{props.name}</h2>
      <p>
        {
            props.description
        }
      </p>
      <p className='price'>
        Rs {
            props.price
        }
      </p>
      <FoodItemForm id={props.id} onAddToCart={addToCartHandler}></FoodItemForm>
    </div>
  )
}

export default FoodItem
