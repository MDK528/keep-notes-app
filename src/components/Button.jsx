import React from 'react'

function Button({text, className, disabled, onClick}) {
  return (
    <button 
      className={className} 
      disabled ={disabled} 
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
