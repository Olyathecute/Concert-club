import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../features/theme/themeSlice'
import Button from '../Button/Button'
import style from './Header.module.scss'

export default function Header() {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const changeTheme = () => {
    const nexTheme = theme === 'normal' ? 'increased' : 'normal'
    dispatch(setTheme(nexTheme))
  }
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link to="/" className={style.link}>
          CONCERT CLUB
        </Link>
      </div>
      <div className={style.buttons_group}>
        <Button onClick={changeTheme} name="Версия для слабовидящих" color="white" />
        <Link to="/profile">
          <Button name="Мой профиль" color="white" />
        </Link>
      </div>
    </header>
  )
}
