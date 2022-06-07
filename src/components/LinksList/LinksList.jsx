import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import style from './LinksList.module.scss'

export default function LinksList({ items }) {
  return (
    <div className={style.list}>
      {items?.map((item, index) => (
        <div key={index} className={style.card}>
          {item.link ? (
            <Link to={item.link} className={style.link}>
              <Card item={item} />
            </Link>
          ) : (
            <Card item={item} />
          )}
        </div>
      ))}
    </div>
  )
}
