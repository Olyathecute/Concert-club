import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import style from './LinksList.module.scss'

export default function LinksList({ items }) {
  return (
    <div className={style.list}>
      {items?.map((item, index) =>
        item.link ? (
          <div key={index} className={style.card}>
            <Link to={item.link} className={style.link}>
              <Card item={item} />
            </Link>
          </div>
        ) : (
          <div className={style.card}>
            <Card item={item} />
          </div>
        )
      )}
    </div>
  )
}
