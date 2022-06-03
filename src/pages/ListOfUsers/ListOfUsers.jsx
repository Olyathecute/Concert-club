import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import Loader from '../../components/Loader/Loader'
import { getAllUsers } from '../../requests'
import style from './ListOfUsers.module.scss'

export default function ListOfUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUsers().then(setUsers)
  }, [])

  if (!users.length) return <Loader />

  return (
    <div className={style.wrapper}>
      <h2>List of users</h2>
      <div className={style.list}>
        {users.map(({ name }, index) => {
          return <Card key={index} title={name} />
        })}
      </div>
    </div>
  )
}
