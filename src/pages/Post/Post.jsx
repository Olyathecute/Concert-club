import React from 'react'
import { Link, useParams } from 'react-router-dom'
import style from './Post.module.scss'

export default function Post() {
  const { id } = useParams()

  console.log(id)

  return (
    <div className={style.wrapper}>
      <div className={style.go_back}>
        <Link to="/posts" className={style.link}>
          <div>... ко всем постам</div>
        </Link>
      </div>

      <div className={style.post}>
        <div className={style.title}>id labore ex et quam laborum</div>
        <div className={style.body}>
          laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente
          accusantium
        </div>
      </div>
    </div>
  )
}
