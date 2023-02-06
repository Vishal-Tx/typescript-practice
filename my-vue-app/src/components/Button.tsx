import React from 'react'

const Button:React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>&{title?:string}> = ({children, title, style, ...rest}) => {
  return (
    <button {...rest} style={{...style, backgroundColor:"brown"}}>{title ?? children}</button>
  )
}

export default Button