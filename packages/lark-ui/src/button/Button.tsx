import React, { FC } from 'react'

type ButtonProps = {
  children: React.ReactNode
}

const Button: FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>
}

export default Button
