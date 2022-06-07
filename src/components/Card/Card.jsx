import React from 'react'
import style from './Card.module.scss'

export default function Card({ item }) {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>{item.title}</div>
      <div className={style.description}>{item.description}</div>
    </div>
  )
}
