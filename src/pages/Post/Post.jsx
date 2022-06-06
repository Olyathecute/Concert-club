import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import style from './Post.module.scss'

export default function Post() {
  const { id } = useParams()

  return (
    <div className={style.wrapper}>
      <Link to="/posts" className={style.link}>
        <HiOutlineChevronLeft size={40} />
      </Link>

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
