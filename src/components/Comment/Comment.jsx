import React from 'react'
import style from './Comment.module.scss'

export default function Comment({ author, comment, email }) {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.author}>{author}</div>
        <div className={style.email}>{email}</div>
      </div>

      <div className={style.body}>{comment}</div>
    </div>
  )
}
