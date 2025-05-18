import React from 'react'

function Input({id,type,value,onChange}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className="border-2 border-gray-300 rounded-md p-2 w-full">
      
    </input>
  )
}

export default Input
