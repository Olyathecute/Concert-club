import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../features/users/usersSlice'
import LinksList from '../../components/LinksList/LinksList'
import Loader from '../../components/Loader/Loader'
import style from './ListOfUsers.module.scss'

export default function ListOfUsers() {
  const dispatch = useDispatch()
  const allUsers = useSelector(state => state.users.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  if (!allUsers.length) return <Loader />

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Список пользователей</div>

      <LinksList items={allUsers.map(({ name }) => ({ title: name }))} />
    </div>
  )
}
