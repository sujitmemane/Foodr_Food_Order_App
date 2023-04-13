import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import './cart.css'
import CartItem from './CartItem'
import CartContext from '../store/cart-context'
const Cart = (props) => {
  const CartCtx=useContext(CartContext)
  console.log(CartCtx.totalAmount)
    const totalAmount = `Rs ${CartCtx.totalAmount.toFixed(2)}`;
   const cartItemRemoveHandler=id=>{
          CartCtx.removeItem(id) 
   }
      const cartItemAddHandler=item=>{
        CartCtx.addItem({
          ...item,
          amount:1
        })
      }
    const cartItems=CartCtx.items.map(item=>{
        return  <CartItem  key={item.id} id={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>
    })
     
  return (
    <Modal onClose={props.onClose} >
        <div className='heading-cart'> Shopping Cart</div>
       { CartCtx.items.length >0 ? <ul className='con'>

      {
        cartItems
      }
        </ul> : <p className='message'>Your Cart is Empty</p>}
        <div className='total'>
                <span>Total Amount</span>
                <span> {totalAmount}</span>
            </div>
            <div className='action-btn'>
                <button className='button close' onClick={props.onClose}>Close</button>
                <button className='button order' >Order</button>
            </div>
    </Modal>
  )
}

export default Cart
