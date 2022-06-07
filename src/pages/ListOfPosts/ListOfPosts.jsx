import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../features/posts/postsSlice'
import Loader from '../../components/Loader/Loader'
import LinksList from '../../components/LinksList/LinksList'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import style from './ListOfPosts.module.scss'

export default function ListOfPosts() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  const navigate = useNavigate()

  if (!posts.length) return <Loader />

  return (
    <div className={style.posts}>
      <div className={style.go_back}>
        <Link to="/profile" className={style.link}>
          <div>... назад в Профиль</div>
        </Link>
      </div>

      <LinksList items={posts.map(({ body, title, id }) => ({ title: title, description: body, link: `/post/${id}` }))} />
    </div>
  )
}
