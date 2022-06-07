import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../features/users/usersSlice'
import { getPosts } from '../../features/posts/postsSlice'
import Loader from '../../components/Loader/Loader'
import UserInfo from '../../components/UserInfo/UserInfo'
import LinksList from '../../components/LinksList/LinksList'
import style from './Profile.module.scss'

export default function Profile() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.users.currentUser)
  const posts = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getUsers())
    dispatch(getPosts())
  }, [dispatch])

  if (!user) return <Loader />

  return (
    <div className={style.wrapper}>
      <UserInfo user={user} />

      <div className={style.posts}>
        <Link to="/posts" className={style.link}>
          <div className={style.title}>Посты</div>
        </Link>

        <LinksList items={posts.map(({ body, title, id }) => ({ title: title, description: body, link: `/post/${id}` }))} />
      </div>
    </div>
  )
}
