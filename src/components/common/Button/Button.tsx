import { CSSProperties, MouseEventHandler, ReactNode } from 'react'
import styles from './Button.module.css'

type Props = {
    onClick?:MouseEventHandler<HTMLButtonElement>,
    children?: ReactNode,
    style?: CSSProperties
}

const Button = ({onClick, children, style}: Props) => {
  return (
    <button onClick={onClick} style={style} className={styles.button}>{children}</button>
  )
}

export default Button