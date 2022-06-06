import React, { useEffect } from 'react'
import Card from '../../components/Card/Card'
import Loader from '../../components/Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../features/users/usersSlice'
import style from './ListOfUsers.module.scss'

export default function ListOfUsers() {
  const dispatch = useDispatch()
  const allUsers = useSelector(state => state.users.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  if (!allUsers.length) return <Loader />

  console.log(allUsers)

  return (
    <div className={style.wrapper}>
      <h2>List of users</h2>
      <div className={style.list}>
        {allUsers?.map(({ name }, index) => {
          return <Card key={index} title={name} />
        })}
      </div>
    </div>
  )
}
