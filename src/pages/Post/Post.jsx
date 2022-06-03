import React from 'react'
import { Link, useParams } from 'react-router-dom'
import style from './Post.module.scss'

export default function Post() {
  const { id } = useParams()
  return <div className={style.post}>Пост {id}</div>
}
