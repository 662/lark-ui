import React, { FC } from 'react'

type ButtonProps = {
  children: React.ReactNode
  className: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return <button {...props}>{children}</button>
}

export default Button
