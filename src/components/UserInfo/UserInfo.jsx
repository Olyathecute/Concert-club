import React from 'react'
import style from './UserInfo.module.scss'

export default function UserInfo({ user }) {
  return (
    <div className={style.grid}>
      <div></div>
      <div className={style.username}>{user.username}</div>
      <div></div>
      <div></div>
      <div className={style.name}>{user.name}</div>
      <div className={style.email}>{user.email}</div>
      <div className={style.phone}>{user.phone}</div>
      <div className={style.website}>{user.website}</div>

      <div></div>
      <div></div>
      <div className={style.company_name}>{user.company.name}</div>
      <div className={style.company_bs}>{user.company.bs}</div>

      <div></div>
    </div>
  )
}
