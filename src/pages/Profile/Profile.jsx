import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../features/users/usersSlice'
import { getPosts } from '../../features/posts/postsSlice'
import Loader from '../../components/Loader/Loader'
import UserInfo from '../../components/UserInfo/UserInfo'
import Card from '../../components/Card/Card'
import style from './Profile.module.scss'

export default function Profile() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.users.currentUser)
  const posts = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getUsers())
    dispatch(getPosts())
  }, [])

  if (!user) return <Loader />

  return (
    <div className={style.wrapper}>
      <UserInfo user={user} />

      <div className={style.posts}>
        <Link to="/posts" className={style.link}>
          <h2>{user.name}`s posts</h2>
        </Link>

        <div className={style.list}>
          {posts.map((post, index) => {
            return (
              <div key={index} className={style.post}>
                <Link to={`/post/${post.id}`} className={style.link}>
                  <Card title={post.title} info={post.body} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
