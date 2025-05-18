import React from 'react'

export const Button = ({type,children}) => {
  return (
    <button
      type={type}
      className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors duration-200"
    >
        {children}
    </button>
  )
}


