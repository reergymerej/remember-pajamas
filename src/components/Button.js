import React from 'react'

const Button = ({onClick, disabled, children}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded"
  >
    {children}
  </button>
)

export default Button
