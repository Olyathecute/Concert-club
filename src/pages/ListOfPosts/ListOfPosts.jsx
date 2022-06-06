import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUsersPosts } from '../../requests'
import Loader from '../../components/Loader/Loader'
import Card from '../../components/Card/Card'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import style from './ListOfPosts.module.scss'

export default function ListOfPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getUsersPosts().then(setPosts)
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
              <Card title={post.title} info={post.body} clicked={true} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
