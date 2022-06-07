import React from 'react'
import style from './Button.module.scss'

export default function Button({ name, onClick, color }) {
  return (
    <button className={style[color]} onClick={onClick}>
      {name}
    </button>
  )
}
