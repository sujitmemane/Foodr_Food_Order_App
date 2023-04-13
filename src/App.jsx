import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './container/hero/Hero'
import Footer from './components/footer/Footer'
import FoodContainer from './Food/FoodContainer'
import Cart from './cart/Cart'
import CartProvider from './store/CartProvider'
function App() {
  
const [cartIsShow,setCartIsShown]=useState(false)

function showCartHandler (){
  setCartIsShown(true)
}

function closeCartHandler(){
  setCartIsShown(false)
}
console.log(cartIsShow)
  return (
    <CartProvider>
      {
cartIsShow && <Cart onClose={closeCartHandler}></Cart>
      }
     <Navbar onShowCart={showCartHandler}/>
    <Hero/>
    <FoodContainer/>
     <Footer/>
    </CartProvider>
  )
}

export default App
