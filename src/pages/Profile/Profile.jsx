import React, { useEffect, useState } from 'react'
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

  const [truncatePosts, setTruncatePosts] = useState(true)

  useEffect(() => {
    dispatch(getUsers())
    dispatch(getPosts())
  }, [dispatch])

  if (!user) return <Loader />

  const handelClick = () => setTruncatePosts(!truncatePosts)

  const displayPosts = truncatePosts ? posts.slice(0, 3) : posts
  const moreText = truncatePosts ? 'показать ещё...' : 'скрыть'

  const postItems = displayPosts.map(({ body, title, id }) => ({ title: title, description: body, link: `/post/${id}` }))

  return (
    <div className={style.wrapper}>
      <UserInfo user={user} />

      <div className={style.posts}>
        <Link to="/posts" className={style.link}>
          <div className={style.title}>Посты</div>
        </Link>

        <LinksList items={postItems} />
        <div className={style.more}>
          <span onClick={handelClick}>{moreText}</span>
        </div>
      </div>
    </div>
  )
}
