import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import Card from '../../components/Card/Card'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import style from './ListOfPosts.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../features/posts/postsSlice'

export default function ListOfPosts() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  if (!posts.length) return <Loader />

  return (
    <div className={style.post}>
      <Link to="/profile" className={style.link}>
        <HiOutlineChevronLeft size={40} />
      </Link>

      <div className={style.list}>
        {posts.map((post, index) => {
          return (
            <Link key={index} to={`/post/${post.id}`} className={style.link}>
              <Card title={post.title} info={post.body} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
