import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllUsers, getUsersPosts } from '../../requests'
import Loader from '../../components/Loader/Loader'
import UserInfo from '../../components/UserInfo/UserInfo'
import Post from '../Post/Post'
import Card from '../../components/Card/Card'
import style from './Profile.module.scss'

export default function Profile() {
  const [user, setUser] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getAllUsers().then(setUser)
    getUsersPosts().then(setPosts)
  }, [])

  if (!user.length) return <Loader />

  console.log(user, posts)

  return (
    <div className={style.wrapper}>
      <UserInfo user={user[7]} />

      <div className={style.posts}>
        <Link to="/posts" className={style.link}>
          <h2>{user[7].name}`s posts</h2>
        </Link>

        <div className={style.list}>
          {posts.map((post, index) => {
            return (
              <Link key={index} to={`/post/${post.id}`}>
                <Card title={post.title} info={post.body} />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
