import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import style from './Header.module.scss'

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link to="/" className={style.link}>
          CONCERT CLUB
        </Link>
      </div>
      <div className={style.buttons_group}>
        <Button name="Версия для слабовидящих" />
        <Link to="/profile">
          <Button name="Мой профиль" />
        </Link>
      </div>
    </header>
  )
}
