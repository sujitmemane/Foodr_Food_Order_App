import React, { useRef, useState } from 'react'
import './food-item-form.css'
import Input from '../../UI/Input'
import { IoAdd } from "react-icons/io5";
const FoodItemForm = (props) => {
  const [amountIsValid,setAmountIsValid]=useState(true)
  const amountInputRef=useRef()
  const submitFormHandler=event=>{
    event.preventDefault()
    const enteredAmount=amountInputRef.current.value
    const enteredAmountNumber=+enteredAmount
    if(enteredAmount.trim().lenght===0 || enteredAmountNumber <1 || enteredAmountNumber >5){
     setAmountIsValid(false)
     return
    }
    props.onAddToCart(enteredAmountNumber)
    
   }
  return (

    <form onSubmit={submitFormHandler}>
    <Input ref={amountInputRef} label='Amount' input={
            {   
                id:'amount_' + props.id,
                type:'number',
                 min:'1',
                 max:'5',
                 step:'1',
                 defaultValue:'1'


            }
          } />
          <button className='btn-submit'>
            ADD <IoAdd size={20} />
            {
              !amountIsValid && <p>Please enter the amount value b/w 1 and 5</p> 
            }
          </button>
    </form>
  )
}

export default FoodItemForm
