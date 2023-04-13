import React from 'react'
import  './input.css'
const Input = React.forwardRef((props,ref) => {
  return (
    <div>
      <label htmlFor={props.input.id}>
        {/* <span className='amount'>{props.label}</span>  */}
      </label>
      <input ref={ref} {...props.input} />

    </div>
  )
})

export default Input
