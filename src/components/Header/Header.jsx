import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button/Button'
import './Header.scss'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="link">
          CONCERT CLUB
        </Link>
      </div>
      <div className="buttons_group">
        <Button name="Версия для слабовидящих" />
        <Link to="/profile">
          <Button name="Мой профиль" />
        </Link>
      </div>
    </header>
  )
}
