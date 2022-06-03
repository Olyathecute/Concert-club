import React, { useEffect, useState } from 'react'
import UsersCard from '../UsersCard/UsersCard'
import { getAllUsers } from '../../requests'
import style from './ListOfUsers.module.scss'

export default function ListOfUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUsers().then(setUsers)
  }, [])

  console.log(users)

  return (
    <div className={style.wrapper}>
      <h2>List of users</h2>
      <div className={style.list}>
        {users.map(({ name }, index) => {
          return <UsersCard key={index} title={name} />
        })}
      </div>
    </div>
  )
}
