import React from 'react'
import style from './Card.module.scss'

export default function Card({ title, info }) {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>{title}</div>
      <div className={style.info}>{info}</div>
    </div>
  )
}
