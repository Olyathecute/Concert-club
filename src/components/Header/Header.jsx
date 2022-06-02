import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">CONCERT CLUB</div>
      <div>
        <button>Версия для слабовидящих</button>
        <button>Мой профиль</button>
      </div>
    </header>
  )
}
