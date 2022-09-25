import React, { ButtonHTMLAttributes } from 'react'
import type { Icon } from 'react-feather'
import './button.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  startIcon?: Icon
  endIcon?: Icon
}

function Button({
  startIcon: StartIcon,
  endIcon: EndIcon,
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button {...props}>
      {StartIcon && <StartIcon role="icon" />}

      {children}

      {EndIcon && <EndIcon role="icon" />}
    </button>
  )
}

export default Button
