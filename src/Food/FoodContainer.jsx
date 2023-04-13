import React from 'react'
import firstItem from '../assets/1.png'
import secondItem from '../assets/2.png'
import thirdItem from '../assets/3.png'
import fourthItem from '../assets/4.png'
import fifthItem from '../assets/5.png'
import sixthItem from '../assets/6.png'
import FoodItem from './food-item/FoodItem'
import './food-container.css'
const DUMMY__FOOD__DATA=[
    {
    id:'M1',
    img:firstItem,
    name:'Cake',
 
    price:200 
    },
       {
    id:'M2',
    img:secondItem,
    name:'Burger',
    
 price:120
    },
    
         {
    id:'M3',
    img:thirdItem,
    name:'Strawberry Drink',
  
     price:90 
    },

         {
    id:'M4',
    img:fourthItem,
    name:'BANANA',
   
  price:50
    },

         {
    id:'M5',
    img:fifthItem,
    name:'GRAPES',
   
    price:100 
    },
    
           {
    id:'M6',
    img:sixthItem,
    name:'Popcorn',
   
    price:220 
    },
    

]

const FoodContainer = () => {
 const foodItemList=DUMMY__FOOD__DATA.map(food=>{
    return <FoodItem key={food.id} id={food.id} img={food.img} name={food.name} description={food.description} price={food.price} ></FoodItem>
 })

  return (
    <section className='foodApp__cart-container' id='cart'>
        <div className='container'>
            <h1 className='heading'>
               Available  Food Items 🍔
            </h1>
            <div className='cart-container'>
  {
    foodItemList
  }
            </div>
        </div>
      
    </section>
  )
}

export default FoodContainer
